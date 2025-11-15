import Hero from "../Components/Hero";
import MovieCard from "../Components/MovieCard";
import React, { Suspense } from "react";
import { useOutletContext } from "react-router";

export default function Home() {
  const { filteredMovies } = useOutletContext();

  return (
    <div>
      <Hero />
      <Suspense fallback={<h2 className="text-center mt-10 text-3xl font-semibold">Loading...</h2>}>
        <MovieCard movieDatas={filteredMovies} />
      </Suspense>
    </div>
  );
}
