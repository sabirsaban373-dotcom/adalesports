import React from 'react';
import { Play } from 'lucide-react';

const Sidebar: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Conference Table */}
            <div className="bg-adale-card rounded-3xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-sm font-black uppercase tracking-widest text-white">Western Conference</h3>
                    <span className="block w-2 h-4 bg-pink-500 rounded-sm"></span>
                </div>

                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="text-slate-500 font-bold text-xs uppercase tracking-wider border-b border-slate-800">
                            <th className="pb-3 pl-2">Pos</th>
                            <th className="pb-3">Club</th>
                            <th className="pb-3">Pts</th>
                            <th className="pb-3 text-right pr-2">Form</th>
                        </tr>
                    </thead>
                    <tbody className="text-white font-medium">
                        <tr className="border-b border-slate-800/50">
                            <td className="py-4 pl-2 text-slate-400">01</td>
                            <td className="py-4">Thunder</td>
                            <td className="py-4 font-bold">57</td>
                            <td className="py-4 text-right pr-2">
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mx-[1px]"></span>
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mx-[1px]"></span>
                                <span className="inline-block w-2 h-2 rounded-full bg-red-500 mx-[1px]"></span>
                            </td>
                        </tr>
                        <tr className="bg-slate-800/30 border-l-2 border-pink-500">
                            <td className="py-4 pl-2 text-pink-500 font-bold">02</td>
                            <td className="py-4">Lakers</td>
                            <td className="py-4 font-bold">55</td>
                            <td className="py-4 text-right pr-2">
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mx-[1px]"></span>
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mx-[1px]"></span>
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mx-[1px]"></span>
                            </td>
                        </tr>
                        <tr className="border-b border-slate-800/50">
                            <td className="py-4 pl-2 text-slate-400">03</td>
                            <td className="py-4">Wolves</td>
                            <td className="py-4 font-bold">54</td>
                            <td className="py-4 text-right pr-2">
                                <span className="inline-block w-2 h-2 rounded-full bg-red-500 mx-[1px]"></span>
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mx-[1px]"></span>
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mx-[1px]"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-6 text-center">
                    <button className="text-pink-500 text-xs font-black uppercase tracking-widest hover:text-pink-400 transition-colors">View Full Brackets</button>
                </div>
            </div>

            {/* Stream Promo */}
            <div className="bg-black rounded-3xl p-8 relative overflow-hidden group cursor-pointer text-center">
                {/* Background Image Placeholder or Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Play size={32} className="text-white fill-white" />
                    </div>

                    <span className="bg-white text-black text-[10px] font-black uppercase px-2 py-0.5 rounded mb-2">Direct Access</span>
                    <h3 className="text-2xl font-black italic text-white leading-none mb-6">STREAM THE NEXT<br />MAIN EVENT LIVE</h3>

                    <button className="bg-white text-black font-black text-xs uppercase px-8 py-3 rounded-full hover:bg-slate-200 transition-colors w-full">
                        Get Access Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
