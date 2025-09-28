import { useContext } from "react";
import { MyContext } from "./ContextProvider";

const MovieCard = ({ movie }) => {
  const {watchListMovies, setWatchListMovies} = useContext(MyContext); // got these from the ContextProvider

  const handleWatchListClick = () => { //this function used to add a movie to the watchList.
    if(watchListMovies.some((ele) => ele.imdbID === movie.imdbID)) { // if user want to add a movie twice to the watchList, then this happens.
      alert("Already added in the watch list !");
      return;
    }
    const newList = [...watchListMovies,movie]; // adding a movie to the watchList
    localStorage.setItem("movies",JSON.stringify(newList));
    setWatchListMovies(newList);
  }

  return (
    //this is a card - every movie object go through this and makes it reusable component.
    <div className="w-[200px] h-[300px] bg-indigo-400 rounded-2xl border-4 border-green-500 mx-auto p-2 text-black">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-[70%] object-cover rounded-md"
      />
      <div className="p-2 text-center">
        <h1 className="text-lg font-bold truncate">{movie.Title}</h1>
        <p className="text-xs">{movie.Year}</p>
        <p className="text-xs italic mb-1">{movie.Type}</p>
        <button
          className="bg-green-500 text-black font-bold text-sm px-4 py-2 rounded-xl hover:bg-green-600 transition"
          onClick={handleWatchListClick}
        >
          Add to WatchList
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
