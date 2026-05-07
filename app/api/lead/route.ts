import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, church, plan } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // 1. Add to Grawt CRM
    const grawtResponse = await fetch('https://grawt.app/api/v1/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.GRAWT_API_KEY || '',
      },
      body: JSON.stringify({
        email,
        fields: {
          first_name: name.split(' ')[0],
          last_name: name.split(' ').slice(1).join(' ') || '',
          phone: phone || '',
          church: church || '',
          plan_interest: plan || '',
          source: 'pastor-ministry-suite-landing',
        },
        add_tags: [plan || 'lead', 'pastor-suite', 'website-capture'],
      }),
    });

    if (!grawtResponse.ok) {
      console.error('Grawt API error:', await grawtResponse.text());
    }

    // 2. Add to GlobalControl for email sequences
    const globalControlResponse = await fetch('https://app.globalcontrol.app/api/v1/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GLOBAL_CONTROL_API_KEY || ''}`,
      },
      body: JSON.stringify({
        email,
        first_name: name.split(' ')[0],
        last_name: name.split(' ').slice(1).join(' ') || '',
        phone: phone || '',
        custom_fields: {
          church: church || '',
          plan_interest: plan || '',
          source: 'pastor-ministry-suite-landing',
        },
        tags: ['pastor-suite-lead', plan || 'lead'],
      }),
    });

    if (!globalControlResponse.ok) {
      console.error('GlobalControl API error:', await globalControlResponse.text());
    }

    // 3. Send welcome email via GlobalControl
    await fetch('https://app.globalcontrol.app/api/v1/emails/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GLOBAL_CONTROL_API_KEY || ''}`,
      },
      body: JSON.stringify({
        to: email,
        subject: 'Welcome to Pastor Ministry Suite',
        template: 'pastor-suite-welcome',
        variables: {
          first_name: name.split(' ')[0],
          plan: plan || 'Individual Pastor',
        },
      }),
    });

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
    });

  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
