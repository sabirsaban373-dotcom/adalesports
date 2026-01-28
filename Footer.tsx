
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-16 mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
              </div>
              <h2 className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">ADALE</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              A modern publishing platform for creators and thinkers across Politics, Lifestyle, Tech, and the Environment.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Guidelines</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Press Kit</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Community</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Become a Writer</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Affiliate Program</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Referral Scheme</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Newsletters</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2024 ADALE Article Publishing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">rss_feed</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
