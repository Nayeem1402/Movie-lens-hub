import React from 'react'
import { use } from 'react';

export default function News({ news }) {
    const newsData = use(news);

    // console.log(newsData.length);
    
  return (
    <div className='mb-16 px-4 w-10/12 mx-auto'>
        <h1 className="text-4xl font-bold text-center mb-8">Latest News</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {newsData.map(item => (
            <div key={item.id} className="mb-4 border-red-600 border-4 p-4 bg-white/10 rounded-lg shadow-md mx-10  gap-4">
                <h2 className="text-2xl font-semibold">{item.headline}</h2>
                <p className="text-sm text-gray-400">{item.date}</p>
                <p>{item.news}</p>
            </div>
        ))}
        </div>
    </div>
  )
}
