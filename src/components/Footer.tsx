import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1c1c1c] text-gray-400 py-16 px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section */}
        <div className="mb-4">
          <img 
            src="/rise-networks-white.png" 
            alt="Rise Networks" 
            className="h-10 mb-4 object-contain" 
          />
          <p className="text-sm text-gray-400 max-w-md leading-relaxed">
            Empowering the next generation of digital leaders and civic innovators to bridge the gap between artificial intelligence, public governance, and election integrity across Africa.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-gray-800 pt-8 mt-8">
          
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Hackathon
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">Overview</a></li>
              <li><a href="#challenges" className="hover:text-orange-500 transition-colors">Challenges</a></li>
              <li><a href="#timeline" className="hover:text-orange-500 transition-colors">Timeline</a></li>
              <li><a href="#eligibility" className="hover:text-orange-500 transition-colors">Eligibility</a></li>
              <li><a href="#prizes" className="hover:text-orange-500 transition-colors">Prizes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#concept-document" className="hover:text-orange-500 transition-colors">Concept Document</a></li>
              <li><a href="#technical-details" className="hover:text-orange-500 transition-colors">Technical Details</a></li>
              <li><a href="#data-access" className="hover:text-orange-500 transition-colors">Dataset Access</a></li>
              <li><a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a></li>
              <li><a href="#guidelines" className="hover:text-orange-500 transition-colors">Submission Rules</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Dev Hub
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#discord" className="hover:text-orange-500 transition-colors">Community Discord</a></li>
              <li><a href="#github" className="hover:text-orange-500 transition-colors">Open Source Repos</a></li>
              <li><a href="#mentorship" className="hover:text-orange-500 transition-colors">Mentorship Program</a></li>
              <li><a href="#api" className="hover:text-orange-500 transition-colors">API Documentation</a></li>
              <li><a href="#workshops" className="hover:text-orange-500 transition-colors">Workshops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Organization
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#risenetworks" className="hover:text-orange-500 transition-colors">About Rise Networks</a></li>
              <li><a href="#board" className="hover:text-orange-500 transition-colors">Advisory Board</a></li>
              <li><a href="#partners" className="hover:text-orange-500 transition-colors">Partners &amp; Sponsors</a></li>
              <li><a href="#press" className="hover:text-orange-500 transition-colors">Press &amp; Media</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#conduct" className="hover:text-orange-500 transition-colors">Code of Conduct</a></li>
              <li><a href="#ethics" className="hover:text-orange-500 transition-colors">AI Ethics Statement</a></li>
              <li><a href="#security" className="hover:text-orange-500 transition-colors">Security Disclosure</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 mt-8 border-t border-gray-800 text-sm">
          <p>&copy; 2026 Rise Networks. All rights reserved.</p>
          
          {/* Social media icons */}
          <div className="flex items-center space-x-4">
            {/* X / Twitter */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="X / Twitter"
              className="text-gray-400 hover:text-orange-500 transition-colors p-1"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-orange-500 transition-colors p-1"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
              className="text-gray-400 hover:text-orange-500 transition-colors p-1"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="YouTube"
              className="text-gray-400 hover:text-orange-500 transition-colors p-1"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
