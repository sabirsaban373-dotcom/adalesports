import React from 'react';

// Using placeholders for logos if actual assets aren't available, or simple text circles
const TeamLogo = ({ team, color }: { team: string, color: string }) => (
    <div className={`w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-[0_0_20px_rgba(255,255,255,0.1)] border-2`} style={{ borderColor: color }}>
        <span className="font-black text-xl text-black">{team.substring(0, 3).toUpperCase()}</span>
    </div>
);

const MatchHeader: React.FC = () => {
    return (
        <div className="bg-adale-card rounded-3xl p-8 mb-8 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-lakers-purple/20 blur-[100px] rounded-full pointing-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-celtics-green/20 blur-[100px] rounded-full pointing-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Home Team */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                    <h2 className="text-5xl font-black italic tracking-wide text-white mb-2" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>LAKERS</h2>
                    <div className="flex items-center gap-4">
                        <span className="bg-[#1e2330] text-emerald-400 px-3 py-1 rounded text-xs font-bold tracking-wider">HOME SEED #1</span>
                    </div>
                </div>

                {/* Scoreboard */}
                <div className="flex flex-col items-center mx-8">
                    <div className="flex items-center gap-6 mb-2">
                        <TeamLogo team="Lakers" color="#fdb927" />
                        <div className="flex items-baseline gap-2">
                            <span className="text-7xl font-black text-white">112</span>
                            <span className="text-4xl font-bold text-slate-500">:</span>
                            <span className="text-7xl font-black text-white">105</span>
                        </div>
                        <TeamLogo team="Celtics" color="#007a33" />
                    </div>
                    <div className="bg-adale-accent px-6 py-1 rounded-full mb-4">
                        <span className="text-white font-bold text-sm tracking-widest uppercase">Final Result</span>
                    </div>
                    <div className="text-center">
                        <p className="text-slate-400 font-bold text-sm uppercase tracking-wider">Crypto.com Arena</p>
                        <p className="text-slate-600 text-xs mt-1">15 FEB 2024 • ATD 18,997</p>
                    </div>
                </div>

                {/* Away Team */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right flex-1">
                    <h2 className="text-5xl font-black italic tracking-wide text-white mb-2" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>CELTICS</h2>
                    <span className="bg-[#1e2330] text-blue-400 px-3 py-1 rounded text-xs font-bold tracking-wider">AWAY SEED #2</span>
                </div>
            </div>
        </div>
    );
};

export default MatchHeader;
