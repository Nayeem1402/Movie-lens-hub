import React, { useState, useEffect } from 'react';

export default function News({ news }) {
    const [newsData, setNewsData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    // Resolve the news if it's a Promise
    useEffect(() => {
        if (news instanceof Promise) {
            news.then(data => setNewsData(data));
        } else {
            setNewsData(news);
        }
    }, [news]);

    // Show first 8 news by default
    const displayedNews = showAll ? newsData : newsData.slice(0, 8);

    return (
        <div className='mb-16 px-4 w-10/12 mx-auto'>
            <h1 className="text-4xl font-bold text-center mb-8">Latest News</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {displayedNews.map(item => (
                    <div key={item.id} className="mb-4 border-red-600 border-4 p-4 bg-white/10 rounded-lg shadow-md mx-10 gap-4">
                        <h2 className="text-2xl font-semibold">{item.headline}</h2>
                        <p className="text-sm text-gray-400">{item.date}</p><br />
                        <p className='text-gray-400'>{item.news}</p>
                    </div>
                ))}
            </div>

            {!showAll && newsData.length > 8 && (
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAll(true)}
                        className="bg-red-600 px-6 py-2 rounded-xl hover:text-red-600 hover:bg-white transition"
                    >
                        Show All News
                    </button>
                </div>
            )}
        </div>
    );
}
