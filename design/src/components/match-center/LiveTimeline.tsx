import React from 'react';
import { Target, AlertTriangle, Zap } from 'lucide-react';

const TimelineEvent = ({ time, title, desc, icon: Icon, color }: { time: string, title: string, desc: string, icon: any, color: string }) => (
    <div className="relative pl-8 pb-8 border-l border-slate-800 last:pb-0">
        <div className={`absolute left-[-20px] top-0 w-10 h-10 rounded-lg flex items-center justify-center bg-slate-800 border border-slate-700 text-white shadow-lg`}>
            <Icon size={20} color={color} />
        </div>
        <div className="ml-4">
            <span className="text-xs font-bold text-adale-accent uppercase">{time}</span>
            <h4 className="text-white font-bold text-sm mt-1 mb-1">{title}</h4>
            <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
        </div>
    </div>
);

const LiveTimeline: React.FC = () => {
    return (
        <div className="bg-adale-card rounded-3xl p-8">
            <h3 className="text-2xl font-black italic text-white tracking-wide mb-8">LIVE TIMELINE</h3>

            <div className="mt-4">
                <TimelineEvent
                    time="4TH QTR • 0:02"
                    title="GAME OVER. Los Angeles Lakers clinch the series."
                    desc="Game over with a dominant performance from the paint."
                    icon={Target}
                    color="#e879f9"
                />
                <TimelineEvent
                    time="4TH QTR • 1:12"
                    title="TIMEOUT CELTICS."
                    desc="Coach calls for a strategic huddle following a 10-0 run by the home team."
                    icon={AlertTriangle}
                    color="#f87171"
                />
                <TimelineEvent
                    time="4TH QTR • 2:45"
                    title="SLAM DUNK! High-flying transition play."
                    desc="High-flying transition play brings the crowd to their feet. ADALE Moment of the Match."
                    icon={Zap}
                    color="#e879f9"
                />
            </div>
        </div>
    );
};

export default LiveTimeline;
