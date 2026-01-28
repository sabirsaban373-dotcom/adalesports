
import React from 'react';
import { Article, Category } from '@/types';
import { CATEGORY_COLORS } from '@/constants';

interface HeroProps {
  article: Article;
}

const Hero: React.FC<HeroProps> = ({ article }) => {
  return (
    <section className="mb-12">
      <div className="@container">
        <div className="relative min-h-[400px] md:min-h-[500px] flex flex-col justify-end overflow-hidden rounded-3xl group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%), url("${article.imageUrl}")`
            }}
          />
          <div className="relative p-8 md:p-12 max-w-3xl">
            <div className={`inline-flex items-center gap-2 ${CATEGORY_COLORS[article.category]} px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-4`}>
              <span className="material-symbols-outlined text-xs">bolt</span>
              {article.category}
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-slate-200 text-lg mb-8 line-clamp-2">
              {article.excerpt}
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:translate-y-[-2px] transition-all flex items-center gap-2 w-fit">
              <span>Read Full Story</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
