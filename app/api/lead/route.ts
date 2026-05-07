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

    // 1. Sync to Grawt CRM (using sync endpoint for upsert)
    const grawtResponse = await fetch('https://grawt.app/api/v1/leads/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.GRAWT_API_KEY || '',
      },
      body: JSON.stringify({
        email,
        first_name: name.split(' ')[0],
        last_name: name.split(' ').slice(1).join(' ') || '',
        phone: phone || '',
        tags: ['pastor-suite-lead', 'pms-sequence-day-1'],
        custom_fields: {
          church: church || '',
          plan_interest: plan || '',
          lead_source: 'pastor-ministry-suite-landing',
        },
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
      { error: 'Failed to process lead', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
