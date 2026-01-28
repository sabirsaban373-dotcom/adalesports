import React from 'react';

const SportsCategoryFilter: React.FC = () => {
    const categories = [
        { name: 'Football', icon: 'sports_soccer', color: 'bg-adale-accent' },
        { name: 'Basketball', icon: 'sports_basketball', color: 'bg-indigo-600' },
        { name: 'Tennis', icon: 'sports_tennis', color: 'bg-emerald-600' },
        { name: 'Athletics', icon: 'sports_motorsports', color: 'bg-pink-600' },
        { name: 'More', icon: 'more_horiz', color: 'bg-slate-800' },
    ];

    return (
        <div className="flex gap-4 py-8 overflow-x-auto hide-scrollbar">
            {categories.map((cat, i) => (
                <button
                    key={cat.name}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full ${i === 0 ? cat.color : 'bg-white/5 hover:bg-white/10'} border border-white/5 transition-all group whitespace-nowrap`}
                >
                    <span className={`material-symbols-outlined text-lg ${i === 0 ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                        {cat.icon}
                    </span>
                    <span className={`text-xs font-black uppercase tracking-widest ${i === 0 ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                        {cat.name}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default SportsCategoryFilter;
