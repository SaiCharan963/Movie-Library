import { useContext } from "react";
import { MyContext } from "./ContextProvider";

const WatchListCard = ({ movie }) => {
  const { watchListMovies, setWatchListMovies } = useContext(MyContext); // got these states from contextprovider

  const handleRemoveClick = () => { // remove the movie from the watchList using id of that movie.
    const newList = watchListMovies.filter(
      (ele) => ele.imdbID !== movie.imdbID
    );
    localStorage.setItem("movies", JSON.stringify(newList)); // and save the remaining to the local storage
    setWatchListMovies(newList);
  };

  {/* This is the card for movies in the watchlist */}
  return (
    <div className="w-full max-w-[600px] h-auto sm:h-[230px] bg-green-300 rounded-2xl border-4 border-indigo-500 flex flex-col sm:flex-row items-center p-3 gap-4 mb-5 overflow-hidden">
      {/* Movie Poster */}
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full sm:w-[180px] h-[200px] sm:h-full object-cover rounded-md"
      />

      {/* Details + Button */}
      <div className="flex flex-col justify-between flex-1 text-black text-center sm:text-left">
        <h1 className="text-lg sm:text-2xl font-bold truncate">
          {movie.Title}
        </h1>
        <p className="text-sm">{movie.Year}</p>
        <p className="text-xs italic">{movie.Type}</p>

        <button
          className="self-center sm:self-start mt-2 bg-red-500 font-bold text-sm px-4 py-2 rounded-xl hover:bg-red-600 transition"
          onClick={handleRemoveClick}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default WatchListCard;
