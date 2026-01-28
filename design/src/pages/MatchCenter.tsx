import React from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import MatchHeader from '@/src/components/match-center/MatchHeader';
import GameMatrix from '@/src/components/match-center/GameMatrix';
import LiveTimeline from '@/src/components/match-center/LiveTimeline';
import Sidebar from '@/src/components/match-center/Sidebar';
import MustSeeVideos from '@/src/components/match-center/MustSeeVideos';
import LiveTicker from '@/src/components/match-center/LiveTicker';
import SportsCategoryFilter from '@/src/components/match-center/SportsCategoryFilter';

const MatchCenter: React.FC = () => {
    return (
        <div className="min-h-screen bg-adale-dark text-white font-sans selection:bg-adale-accent selection:text-white">
            <LiveTicker />

            <div className="bg-adale-dark/50 backdrop-blur-md border-b border-white/5 sticky top-0 z-40">
                <Navbar onSearch={() => { }} />
            </div>

            {/* Sub-nav / Breadcrumbs */}
            <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center text-[10px] font-black tracking-widest text-slate-500 uppercase">
                <span className="hover:text-white cursor-pointer transition-colors">NBA League</span>
                <span className="mx-2 text-slate-700">/</span>
                <span className="text-adale-accent">Western Conference Finals</span>
            </div>

            <main className="max-w-[1400px] mx-auto px-6 pb-12">
                <SportsCategoryFilter />

                <MatchHeader />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        {/* Tab Switcher */}
                        <div className="flex border-b border-white/10 overflow-x-auto hide-scrollbar">
                            {['Match Story', 'Rosters', 'Performance Stats', 'Expert Commentary'].map((tab, i) => (
                                <button
                                    key={tab}
                                    className={`px-6 py-4 text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-colors relative
                                    ${i === 2 ? 'text-white' : 'text-slate-500 hover:text-slate-300'}
                                `}
                                >
                                    {tab}
                                    {i === 2 && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-adale-accent"></span>}
                                </button>
                            ))}
                        </div>

                        <GameMatrix />

                        <LiveTimeline />

                        <MustSeeVideos />
                    </div>

                    <div className="lg:col-span-1">
                        <Sidebar />
                    </div>
                </div>
            </main>

            <footer className="bg-[#05080f] py-16 px-6 border-t border-white/5 mt-20">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-adale-accent rounded-xl grid place-items-center shadow-lg shadow-adale-accent/20">
                            <span className="material-symbols-outlined text-white text-xl">sports_basketball</span>
                        </div>
                        <span className="font-black italic text-2xl text-white tracking-tighter">ADALE SPORTS <span className="text-blue-500">CENTER</span></span>
                    </div>

                    <div className="flex gap-12 text-xs font-black text-slate-500 uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Contact Us</a>
                    </div>

                    <div className="flex gap-4">
                        {['public', 'chat', 'play_circle'].map(icon => (
                            <button key={icon} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/5 hover:text-white transition-all">
                                <span className="material-symbols-outlined text-xl">{icon}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="max-w-[1400px] mx-auto mt-12 pt-8 border-t border-white/5 text-center">
                    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">© 2024 ADALE MEDIA GROUP. GLOBAL BROADCAST RIGHTS RESERVED.</p>
                </div>
            </footer>
        </div>
    );
};

export default MatchCenter;
