import React from 'react';

interface CircularStatProps {
    label: string;
    value: number;
    color: string;
    subLabel?: string;
}

const CircularStat: React.FC<CircularStatProps> = ({ label, value, color }) => {
    const radius = 35; // increased radius
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="#1e2330"
                        strokeWidth="8"
                        fill="transparent"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke={color}
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black text-white">{value}%</span>
                </div>
            </div>
            <span className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</span>
        </div>
    );
};

const GameMatrix: React.FC = () => {
    return (
        <div className="bg-adale-card rounded-3xl p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black italic text-white tracking-wide">GAME MATRIX</h3>
                <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-teal-400 text-xs font-bold">● LAL</span>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-blue-500 text-xs font-bold">● BOS</span>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <CircularStat label="Possession" value={52} color="#00ffc8" />
                <CircularStat label="FG Accuracy" value={70} color="#3b82f6" />
                <CircularStat label="Free Throws" value={86} color="#00ffc8" />
                <CircularStat label="3PT Success" value={43} color="#3b82f6" />
            </div>

            <div className="mt-12 space-y-6">
                {/* Comparison Bar Refined */}
                <div>
                    <div className="flex justify-between text-xs font-bold tracking-widest text-slate-400 mb-2">
                        <span className="text-teal-400">18 OFFENSIVE</span>
                        <span>TOTAL REBOUNDS</span>
                        <span className="text-blue-500">14 DEFENSIVE</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden flex">
                        <div className="bg-teal-400 h-full" style={{ width: '56%' }}></div>
                        <div className="bg-blue-500 h-full" style={{ width: '44%' }}></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-xs font-bold tracking-widest text-slate-400 mb-2">
                        <span className="text-teal-400">12 PERSONAL</span>
                        <span>TEAM FOULS</span>
                        <span className="text-blue-500">15 PERSONAL</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden flex">
                        <div className="bg-teal-400 h-full" style={{ width: '45%' }}></div>
                        <div className="bg-blue-500 h-full" style={{ width: '55%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameMatrix;
