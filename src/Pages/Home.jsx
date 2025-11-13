import Hero from "../Components/Hero";
import MovieCard from "../Components/MovieCard";
import React, { Suspense } from "react";
 
export default function Home() {
  const movieDatas = fetch("./../../public/movie.json")
  .then(res => res.json());


  return (
    <div>
      <Hero></Hero>
      <Suspense fallback={<h2 className="text-center mt-10 text-3xl font-semibold">Loading...</h2>}>
        <MovieCard movieDatas={movieDatas}></MovieCard>
      </Suspense>
    </div>
  )
}
