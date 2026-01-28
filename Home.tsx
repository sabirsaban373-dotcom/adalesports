import React, { useState, useEffect, useMemo } from 'react';
import { Category, Article } from '@/types';
import { ARTICLES } from '@/constants';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import CategoryFilters from '@/src/components/CategoryFilters';
import ArticleCard from '@/src/components/ArticleCard';
import Footer from '@/src/components/Footer';
import { searchArticlesIntelligently } from '@/src/services/geminiService';

const Home: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredArticles, setFilteredArticles] = useState<Article[]>(ARTICLES);
    const [isSearching, setIsSearching] = useState(false);

    const featuredArticle = useMemo(() => ARTICLES.find(a => a.featured) || ARTICLES[0], []);

    useEffect(() => {
        const filterData = async () => {
            let results = ARTICLES;

            // Filter by category
            if (selectedCategory !== Category.ALL) {
                results = results.filter(a => a.category === selectedCategory);
            }

            // Intelligent search with Gemini if query exists
            if (searchQuery.trim().length > 2) {
                setIsSearching(true);
                try {
                    results = await searchArticlesIntelligently(searchQuery, results);
                } catch (error) {
                    console.error("Gemini search failed, falling back to basic filter", error);
                    results = results.filter(a =>
                        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                } finally {
                    setIsSearching(false);
                }
            }

            setFilteredArticles(results.filter(a => !a.featured));
        };

        filterData();
    }, [selectedCategory, searchQuery]);

    return (
        <div className="min-h-screen">
            <Navbar onSearch={(q) => setSearchQuery(q)} />

            <main className="max-w-[1200px] mx-auto px-6 py-8">
                {!searchQuery && <Hero article={featuredArticle} />}

                <CategoryFilters
                    selectedCategory={selectedCategory}
                    onSelect={(cat) => {
                        setSelectedCategory(cat);
                        setSearchQuery('');
                    }}
                />

                {searchQuery && (
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">
                            {isSearching ? 'Searching...' : `Search results for "${searchQuery}"`}
                        </h2>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="text-primary font-semibold text-sm hover:underline"
                        >
                            Clear search
                        </button>
                    </div>
                )}

                <section className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">search_off</span>
                            <p className="text-slate-500 text-lg">No stories found. Try a different category or search.</p>
                        </div>
                    )}
                </section>

                {filteredArticles.length > 0 && (
                    <div className="mt-16 flex justify-center">
                        <button className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:scale-105 transition-all shadow-lg active:scale-95">
                            Discover More Stories
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Home;
