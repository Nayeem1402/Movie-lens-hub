import { Outlet } from 'react-router';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import ScrollToTop from './Components/ScrollToTop';
 
export default function Root() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/movie.json")
      .then(res => res.json())
      .then(data => {
        setMovies(data);
        setFilteredMovies(data);
      });
  }, []);

  // Filter movies based on search or category
  useEffect(() => {
    let temp = movies;

    // Category filter
    if (selectedCategory && selectedCategory !== "All") {
      temp = temp.filter(movie =>
        movie.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Search filter
    if (searchQuery) {
      temp = temp.filter(movie =>
        movie.movie_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredMovies(temp);
  }, [searchQuery, selectedCategory, movies]);

  return (
    <div>
     <ScrollToTop />
      <Navbar
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
      />
      <Outlet context={{ filteredMovies }} />
      <Footer setSelectedCategory={setSelectedCategory} />
    </div>
  );
}
