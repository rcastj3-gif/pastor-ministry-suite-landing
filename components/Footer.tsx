"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-4">Pastor Ministry Suite</h3>
            <p className="mb-4 max-w-md text-sm sm:text-base">
              7 AI agents designed to return 13+ hours weekly to pastors. 
              Stop being a church administrator. Start being a pastor.
            </p>
            <p className="text-sm">
              Contact:{" "}
              <a href="mailto:reyes@agentmail.to" className="text-sky-400 hover:underline">
                reyes@agentmail.to
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 Pastor Ministry Suite. All rights reserved.</p>
          <p className="mt-2 italic">
            "Commit to the LORD whatever you do, and he will establish your plans." — Proverbs 16:3
          </p>
        </div>
      </div>
    </footer>
  );
}