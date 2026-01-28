import React from 'react';
import { Play } from 'lucide-react';

const VideoCard = ({ title, bg }: { title: string, bg: string }) => (
    <div className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer">
        <div className={`absolute inset-0 ${bg} transition-transform duration-500 group-hover:scale-110`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Play className="text-white fill-white" size={24} />
            </div>
        </div>

        <div className="absolute bottom-6 left-6 pr-6">
            <h4 className="text-white font-black italic text-lg leading-tight uppercase tracking-tight">{title}</h4>
        </div>

        {/* Simple play icon for static state */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:hidden">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Play className="text-white fill-white translate-x-[2px]" size={18} />
            </div>
        </div>
    </div>
);

const MustSeeVideos: React.FC = () => {
    return (
        <div className="mt-12">
            <div className="flex justify-between items-end mb-8">
                <h3 className="text-3xl font-black italic text-white tracking-wide uppercase">
                    MUST SEE <span className="text-adale-accent">VIDEOS</span>
                </h3>
                <button className="text-adale-accent font-black text-xs uppercase tracking-widest hover:underline px-4 py-2">View All</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <VideoCard
                    title="Top 10 Goals of the Week"
                    bg="bg-gradient-to-br from-indigo-900 to-purple-800"
                />
                <VideoCard
                    title="NBA Playoffs: Epic Moments"
                    bg="bg-gradient-to-br from-orange-900 to-amber-800"
                />
            </div>
        </div>
    );
};

export default MustSeeVideos;
