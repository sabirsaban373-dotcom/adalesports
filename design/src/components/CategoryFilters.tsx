
import React from 'react';
import { Category } from '@/types';
import { CATEGORY_HOVER_COLORS } from '@/constants';

interface CategoryFiltersProps {
  selectedCategory: Category;
  onSelect: (category: Category) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ selectedCategory, onSelect }) => {
  const categories = [
    { name: Category.ALL, icon: 'grid_view', color: 'text-primary', dot: null },
    { name: Category.POLITICS, icon: null, color: null, dot: 'bg-politics-red' },
    { name: Category.LIFESTYLE, icon: null, color: null, dot: 'bg-lifestyle-pink' },
    { name: Category.TECHNOLOGY, icon: null, color: null, dot: 'bg-tech-blue' },
    { name: Category.ENVIRONMENT, icon: null, color: null, dot: 'bg-env-green' },
  ];

  return (
    <section className="mb-8 overflow-x-auto hide-scrollbar">
      <div className="flex items-center gap-4 pb-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => onSelect(cat.name)}
            className={`flex items-center gap-2 bg-white dark:bg-slate-800 border ${selectedCategory === cat.name
                ? 'border-primary ring-1 ring-primary'
                : 'border-slate-200 dark:border-slate-700'
              } px-5 py-2.5 rounded-full whitespace-nowrap transition-all shadow-sm ${CATEGORY_HOVER_COLORS[cat.name]}`}
          >
            {cat.icon && <span className={`material-symbols-outlined ${cat.color}`}>{cat.icon}</span>}
            {cat.dot && <span className={`size-2 rounded-full ${cat.dot}`}></span>}
            <span className="text-sm font-semibold">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryFilters;
