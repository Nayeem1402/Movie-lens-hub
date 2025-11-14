 
            export default function Footer() {
  const categories = [
            "Action",
            "Romantic",
            "Thriller",
            "Comedy",
            "Drama",
            "Horror",
            "Sci-Fi",
            "Adventure",
            "Crime",
            "Biography",
            "Family",
            "Animation",
            ];

            return (
            <footer className="bg-black/40 backdrop-blur-md text-white mt-20 pt-10 pb-6 px-[10%] border-t border-white/10">
 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    
                    <div>
                        <h2 className="text-2xl font-extrabold text-[#E50914] mb-3">
                            Movie Lens Hub
                        </h2>
                        <p className="text-gray-300">
                            Your ultimate destination for movie reviews, ratings, and recommendations. Dive into the world of cinema with us!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                        <ul className="space-y-1 text-gray-300">
                            {["Home", "TV Show", "Blog", "Request Movie"].map((item, idx) => (
                                <li key={idx}>
                                    <a className="hover:text-[#E50914] transition duration-300 cursor-pointer">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Categories</h3>
                        <ul className="space-y-1 text-gray-300">
                            {categories.map((cat, idx) => (
                                <li key={idx}>
                                    <a className="hover:text-[#E50914] transition duration-300 cursor-pointer">
                                        {cat}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <ul className="space-y-1 text-gray-300">
                            <li>Email: support@movielenshub.com</li>
                            <li>Phone: +880 123 456 789</li>
                            <li>Location: Dhaka, Bangladesh</li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-4">
                            <a className="hover:text-[#E50914] transition text-xl cursor-pointer">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a className="hover:text-[#E50914] transition text-xl cursor-pointer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a className="hover:text-[#E50914] transition text-xl cursor-pointer">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center text-gray-400 mt-10 border-t border-white/10 pt-4 text-sm">
                    © {new Date().getFullYear()} Movie Lens Hub — All Rights Reserved.
                </div>
            </footer>
            );
}

        
 