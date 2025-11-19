import React from "react";
import "./../index.css";
import hover3d from "daisyui/components/hover3d";

export default function MovieCard({ movieDatas }) {
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
    document.getElementById("movie_modal").checked = true;
  };

  return (
    <>
      {movieDatas && movieDatas.length > 0 ? (
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center place-items-center py-6 w-10/12 mx-auto mt-0 ">
          {movieDatas.map((movie) => (
            <div
              key={movie.id}
              className="w-[300px] relative h-[380px] justify-center p-2 my-8 cursor-pointer  hover-3d text-white  hover:text-red-600   "
              onClick={() => handleClick(movie)}
            >
              <div
                key={movie.id}
                className="w-[260px] h-[390px] group cursor-pointer relative p-2 my-8"
                onClick={() => handleClick(movie)}
              >
                <div className="h-[300px] w-full overflow-hidden rounded-xl shadow-md">
                  <img
                    className="h-full w-full object-cover rounded-xl "
                    src={movie.vertical_poster}
                    alt={movie.movie_name}
                  />
                </div>

                <div className="mt-3 flex justify-between items-center w-full px-1">
                  <div>
                    <h4 className="text-xl font-semibold truncate">{movie.movie_name}</h4>
                    <p className="text-gray-400">{movie.language}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">{movie.rating}</p>
                    <p className="text-gray-400">{movie.release_year}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center mt-20 text-3xl font-semibold text-gray-400">
          No movies found 😔
        </h2>
      )}


      {/* modal  */}

      <input type="checkbox" id="movie_modal" className="modal-toggle" />
      <div className="modal overflow-y-auto my-auto ">
        <div className="modal-box bg-[#1C1C1C] text-white relative w-11/12 md:w-10/12 lg:w-7/12 max-w-[90vw] max-h-[70vh] flex flex-col">
          <label
            htmlFor="movie_modal"
            className="btn absolute border-none top-5 right-9 lg:right-12 px-3 py-2 rounded-full bg-red-600 text-white cursor-pointer z-10 hover:bg-white hover:text-red-600"
          >
            Close
          </label>
          <div className="overflow-y-auto pr-2 modal-container">
            {selectedMovie ? (
              <>
                <div className="modal-img">
                  <img
                    className="w-full h-[200px] lg:h-[350px] object-cover my-4 rounded"
                    src={selectedMovie.horizontal_poster}
                    alt={selectedMovie.movie_name}
                  />
                </div>
                <h3 className="text-2xl lg:mt-10 font-bold text-start modal-name">
                  {selectedMovie.movie_name}
                </h3>
                <div className="btn-container flex flex-wrap gap-3 my-4">
                  <button className="btn modal-button1 border-none bg-white text-red-600 rounded-3xl font-bold w-[150px] hover:bg-red-600 hover:text-white">
                    <a target="blank" href={selectedMovie.movie_link}>
                      Watch Movie
                    </a>
                  </button>
                  <button className="btn modal-button2 border-none bg-white text-red-600 rounded-3xl w-[150px] font-bold hover:bg-red-600 hover:text-white">
                    <a target="blank" href={selectedMovie.trailer_link}>
                      Watch Trailer
                    </a>
                  </button>
                </div>
                <div className="modal-details space-y-1">
                  <p className="text-gray-400">
                    <span className="font-semibold text-white">Category:</span>{" "}
                    {selectedMovie.category}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-semibold text-white">Release Year:</span>{" "}
                    {selectedMovie.release_year}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-semibold text-white">IMDB Rating:</span>{" "}
                    {selectedMovie.rating}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-semibold text-white">Actor:</span>{" "}
                    {selectedMovie.actor_name}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-semibold text-white">Actress:</span>{" "}
                    {selectedMovie.actress_name}
                  </p>
                </div>
                <p className="py-2 modal-dis text-gray-400">
                  <span className="font-semibold text-white">Description:</span>
                  <br />
                  {selectedMovie.description || "No description available."}
                </p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
