
import React, { useState } from 'react';

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(searchValue);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-10">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">auto_awesome</span>
            </div>
            <h2 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">ADALE</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Categories</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Top Stories</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined text-slate-400 text-lg">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-500 text-slate-900 dark:text-white"
              placeholder="Search stories..."
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 hidden sm:flex">
            <span className="material-symbols-outlined text-sm">edit</span>
            <span>Write</span>
          </button>
          <div
            className="size-10 rounded-full bg-cover bg-center border-2 border-slate-200 dark:border-slate-700 cursor-pointer"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJxkXLzvOKSgUM_Ek-J0C6lX9temFVZFhD5bB0l10shUoGQ0yx6H5jVAA3o35eQEUcuGIvrEXx5k5OYW5pMjTvtlKhOSH1Ieuyi7C5drHgvJnc_xsgY0I_vGRXo_cJCiTruFU8RQf8fvcYDD9qynJHSm6z5rZZGlWlL-K1fiQ4eJ2eEoXHSUQeAqzFLvQL_DKZ2AvXxkuh1htBQPZRHRYkq_lv2k-JbsvTT8_8f2qWJOf-uWYS_n4nnlxWHY1ElBFMbyxCZlQG8xw-")' }}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-5">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-3 border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined text-slate-400 text-lg">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500 text-slate-900 dark:text-white"
              placeholder="Search stories..."
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              onKeyDown={(e) => {
                handleKeyDown(e);
                if (e.key === 'Enter') setIsMobileMenuOpen(false);
              }}
            />
          </div>
          <nav className="flex flex-col gap-4">
            <a className="text-lg font-semibold hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-lg font-semibold hover:text-primary transition-colors" href="#">Categories</a>
            <a className="text-lg font-semibold hover:text-primary transition-colors" href="#">Top Stories</a>
          </nav>
          <button className="bg-primary text-white text-base font-bold px-5 py-3 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 w-full">
            <span className="material-symbols-outlined text-sm">edit</span>
            <span>Write a Story</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
