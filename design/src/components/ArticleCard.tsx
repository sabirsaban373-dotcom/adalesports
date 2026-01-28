
import React from 'react';
import { Article, Category } from '@/types';
import { CATEGORY_COLORS } from '@/constants';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const getAspectClass = () => {
    switch (article.aspectRatio) {
      case 'video': return 'aspect-video';
      case 'square': return 'aspect-square';
      case '[3/4]': return 'aspect-[3/4]';
      case '[4/3]': return 'aspect-[4/3]';
      default: return 'aspect-video';
    }
  };

  return (
    <article className="break-inside-avoid bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group mb-8">
      <div className={`relative ${getAspectClass()} overflow-hidden`}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url("${article.imageUrl}")` }}
        />
        <div className="absolute top-4 left-4">
          <span className={`${CATEGORY_COLORS[article.category]} text-white text-[10px] font-bold uppercase px-2 py-1 rounded`}>
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="material-symbols-outlined text-sm">schedule</span>
            {article.readTime}
          </div>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">By {article.author}</div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
