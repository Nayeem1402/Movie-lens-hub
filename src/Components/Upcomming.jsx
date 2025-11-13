 import { use } from "react";
import bgImage from './../assets/Images/movie-9pvmdtvz4cb0xl37.jpg'; 

export default function Upcomming({ comming }) {
    const data = use(comming);

    return (
       <div>
         <h1 className="text-center text-4xl font-bold mb-6 text-white drop-shadow-lg">
                Upcoming Movies
            </h1>
        <div
            className="py-10 w-10/12 mx-auto rounded-2xl relative"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            

            {/* Auto-scrolling container */}
            <div className="overflow-hidden relative w-full">
                <div
                    className="flex animate-scroll whitespace-nowrap"
                    style={{ minWidth: 'max-content' }}
                >
                    {data.concat(data).map((commingData, index) => (
                        <div
                            className="bg-white/20 backdrop-blur-md border border-white/30 p-5 w-[300px] h-[220px] rounded-3xl shadow-xl flex-shrink-0 mx-3 inline-block flex flex-col justify-center"
                            key={index}
                        >
                            <span className="font-bold text-red-600 text-2xl text-wrap">{commingData.name}</span> <br />
                            <span className="font-black">Actor:</span> {commingData.actor} <br />
                            <span className="font-black">Actress:</span> {commingData.actress} <br />
                            <span className="text-red-600">Release Date:</span> {commingData.release_date} <br />
                            <span className="font-black">Category:</span> {commingData.category}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    display: inline-flex;
                    animation: scroll 100s linear infinite;
                }
            `}</style>
        </div>
       </div>
    );
}
