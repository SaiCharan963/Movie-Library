import { MdOutlineCloudQueue } from "react-icons/md";
import MovieList from "./MovieList";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./ContextProvider";

const getURL = `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_OMDB_API_KEY}`;

const MovieSearch = () => {
  const {movieName, setMovieName, movies, setMovies, setPage, setValue, setIsLoading} = useContext(MyContext); // get these states from contextProvider

  const handleSearch = async () => { // when we click search this function calls.
    if (movieName.trim() === "") { // here we check, if input is empty or not.
      alert("Please enter a movie name");
      return;
    }
    
    setIsLoading(true);
    setValue(movieName.trim()); // we remove forword and bakword spaces using trim and we set the value.
    const data = await fetch(`${getURL}&s=${movieName.trim()}&page=1`); // here we fetch the movies on that specific name
    setPage(1); // by default always be page 1. 
    const response = await data.json();
    setIsLoading(false);

    if (response.Response === "True") { // if response id true we store that data in movies, else no movie exist on that name.
      setMovies(response.Search);
    } else {
      alert("No movies found");
    }

    setMovieName(""); // clearning the search space after search.
  };

  return (
    <div>
      <div>
        <div>
          <h1 className=" text-green-500 text-3xl font-bold mb-8 text-center pt-10">
            Movie Library 🎬{" "}
            <span className="text-indigo-400 text-lg">
              | Search & Add to Watchlist
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-[50px] lg:px-[250px] mb-5 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto flex-1">
              <input
                type="text"
                placeholder="Enter movie name..."
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                className="border border-indigo-300 rounded px-3 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
              />
              <button
                onClick={handleSearch}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition mt-2 sm:mt-0"
              >
                Search
              </button>
            </div>

            {/* Watch Later Button and it is a navlink if we click it will take you to the different route */}
            <div className="w-full sm:w-auto">
              <NavLink to={"/watchlist"}>
                <button className="flex justify-center w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  <span className="pr-4 pt-1 font-semibold">
                    Show WatchList
                  </span>
                  <MdOutlineCloudQueue size={"30"} />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default MovieSearch;
