import { Link } from 'react-router';
import Suscribtion from '../Pages/Suscribtions';

export default function Footer({ setSelectedCategory }) {
  const categories = [
    "Action", "Romantic", "Thriller", "Comedy", "Drama", "Horror",
    "Sci-Fi", "Adventure", "Crime", "Biography", "Family", "Animation"
  ];

  const hoverEffect =
    "relative inline-block transition duration-300 transform hover:scale-105 hover:text-red-600 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
    "after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full text-white";

  return (
    <footer className="bg-black/40 backdrop-blur-md text-white mt-20 pt-10 pb-6 px-[10%] border-t border-white/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#E50914] mb-3">Movie Lens Hub</h2>
          <p className="text-gray-300">
            Your ultimate destination for movie reviews, ratings, and recommendations. 
            Dive into the world of cinema with us!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              <Link to="/" onClick={() => handleCategoryClick("All")} className={hoverEffect}>Home</Link>
            </li>
            <li>
              <Link className={hoverEffect} to="/suscribtion">Suscribtion</Link>
            </li>
          </ul>
        </div>

        {/* Categories Dropdown */}
        <div>
          <h3 className="text-lg font-bold mb-2">Categories</h3>

          <details className="group">
            <summary className="cursor-pointer text-gray-300 py-1 px-2 rounded-md bg-white/5 hover:bg-white/10 transition">
              Select Category
            </summary>

            <ul className="mt-2 border border-white/10 rounded-md bg-black/40 backdrop-blur-xl shadow-lg">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className="px-3 py-2 text-gray-300 hover:bg-white/10 cursor-pointer transition"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </details>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Email: support@movielenshub.com</li>
            <li>Phone: +880 123 456 789</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 border-t border-white/10 pt-4 text-sm">
        © {new Date().getFullYear()} Movie Lens Hub — All Rights Reserved.
      </div>
    </footer>
  );
}
