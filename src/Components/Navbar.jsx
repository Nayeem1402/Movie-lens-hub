import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router";

export default function Navbar({ setSelectedCategory, setSearchQuery }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRefMobile = useRef(null);
  const dropdownRefDesktop = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (
        dropdownRefMobile.current &&
        !dropdownRefMobile.current.contains(event.target) &&
        dropdownRefDesktop.current &&
        !dropdownRefDesktop.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const hoverEffect =
    "relative inline-block transition duration-300 transform hover:scale-105 hover:text-red-600 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
    "after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full text-white";

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery("");
    setDropdownOpen(false);
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const categories = [
    "Action", "Romantic", "Thriller", "Comedy", "Drama", "Horror",
    "Sci-Fi", "Adventure", "Crime", "Biography", "Family", "Animation"
  ];

  return (
    <div
      className={`mx-auto px-[10%] fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-500 ${
        scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="navbar">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>

            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow text-lg">
              <li>
                <Link to="/" onClick={() => handleCategoryClick("All")} className={` ${hoverEffect}`}>Home</Link>
              </li>
              <li ref={dropdownRefMobile}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`${hoverEffect} block flex justify-between items-center w-full hover:text-red-600 text-white`}
                >
                  Categories
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform transition-transform duration-200 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <ul className="p-2 bg-base-100 rounded-box mt-2 space-y-1">
                    {categories.map(cat => (
                      <li key={cat}>
                        <a onClick={() => handleCategoryClick(cat)} className={hoverEffect}>{cat}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link to="/tv-show" onClick={() => handleCategoryClick("TV Show")} className={hoverEffect}>TV Show</Link>
              </li>
              <li>
                <Link className={hoverEffect} to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <a onClick={() => handleCategoryClick("All")} className="font-extrabold text-[#E50914] text-3xl hidden md:block cursor-pointer">
            Movie Lens Hub
          </a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex" ref={dropdownRefDesktop}>
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <Link to="/" onClick={() => handleCategoryClick("All")} className={hoverEffect}>Home</Link>
            </li>
            <li>
              <details open={dropdownOpen}>
                <summary
                  className="hover:text-red-600 cursor-pointer text-white"
                  onClick={(e) => { e.preventDefault(); setDropdownOpen(!dropdownOpen); }}
                >
                  Categories
                </summary>
                <ul className="p-2 bg-[#1C1C1C] rounded-box">
                  {categories.map(cat => (
                    <li key={cat}>
                      <a onClick={() => handleCategoryClick(cat)} className={hoverEffect}>{cat}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <Link to="/tv-show" onClick={() => handleCategoryClick("TV Show")} className={hoverEffect}>TV Show</Link>
            </li>
            <li>
              <Link className={hoverEffect} to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center relative">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white p-2 focus:outline-none md:inline-flex lg:hidden"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5a6 6 0 100 12 6 6 0 000-12zM21 21l-4.3-4.3" />
            </svg>
          </button>

          <div
            className={`absolute right-0 top-0 transition-all duration-300 overflow-hidden ${
              searchOpen ? "w-[200px] opacity-100" : "w-0 opacity-0"
            } md:${searchOpen ? "w-[250px] opacity-100" : "w-0 opacity-0"} lg:static lg:opacity-100 lg:w-[250px]`}
          >
            <label className="flex w-full bg-transparent border border-white/30 hover:border-white/50 focus-within:border-white/70 focus-within:bg-black/30 backdrop-blur-md text-white rounded-full px-3 py-2 items-center gap-2 transition-all duration-300">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search by movie name"
                onChange={handleSearchChange}
                className="bg-transparent focus:outline-none text-white placeholder-gray-400 w-full transition-all duration-300"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
