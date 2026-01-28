import React from 'react';

const TickerItem = ({ teams, score, status, color }: { teams: string, score: string, status: string, color?: string }) => (
    <div className="flex items-center gap-4 px-6 border-r border-white/10 whitespace-nowrap group cursor-pointer hover:bg-white/5 transition-colors">
        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${color || 'bg-slate-800 text-slate-400'}`}>
            {status}
        </span>
        <div className="flex items-center gap-3">
            <span className="text-xs font-black text-white">{teams}</span>
            <span className="text-xs font-black text-adale-accent">{score}</span>
        </div>
    </div>
);

const LiveTicker: React.FC = () => {
    return (
        <div className="bg-[#05080f] border-b border-white/5 overflow-hidden">
            <div className="flex animate-marquee py-3">
                <TickerItem teams="ARS - MCI" score="2 - 1" status="Final" />
                <TickerItem teams="LAL - GSW" score="102 - 98" status="Live" color="bg-blue-600 text-white" />
                <TickerItem teams="NAD - FED" score="3 - 2" status="Set 5" color="bg-emerald-600 text-white" />
                <TickerItem teams="USA - JAM" score="400M" status="Live" color="bg-pink-600 text-white" />
                <TickerItem teams="MC - ARS" score="2 - 1" status="Live" color="bg-emerald-600 text-white" />
                <TickerItem teams="LAL - BOS" score="112 - 105" status="Final" />
                {/* Duplicate for seamless loop if needed, but for now just a bar */}
                <TickerItem teams="ARS - MCI" score="2 - 1" status="Final" />
                <TickerItem teams="LAL - GSW" score="102 - 98" status="Live" color="bg-blue-600 text-white" />
            </div>
        </div>
    );
};

export default LiveTicker;
