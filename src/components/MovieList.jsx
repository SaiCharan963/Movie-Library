import { useContext } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import MovieCard from "./MovieCard";
import { MyContext } from './ContextProvider';

const getURL = `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_OMDB_API_KEY}`; // OMDb API endpoint (API key is stored securely in .env)

const MovieList = ({ movies }) => {
  const {page, setPage, value, setMovies, isLoading, setIsLoading} = useContext(MyContext); // got these from contextProvider

  const handleNextClick = async () => { // this function again fetches next 10 movies on that specific name if exist. (that's why it is async).
    setIsLoading(true);
    setPage(page+1);
    const data = await fetch(`${getURL}&s=${value}&page=${page+1}`);
    const response = await data.json();
    setIsLoading(false);
    if (response.Response === "True") {
      setMovies(response.Search); // storing the data in movies state.
    } else {
      alert("No more movies found");
    }
  }

  const handlePrevClick = async () => { // this function fetches previous 10 movies and stores in movies state
    setIsLoading(true);
    setPage(page - 1);
    const data = await fetch(`${getURL}&s=${value}&page=${page - 1}`);
    const response = await data.json();
    setIsLoading(false);
    if (response.Response === "True") {
      setMovies(response.Search);
    } else {
      alert("unable to fetch please refresh");
    }
  }



  return (
    <div>
      {isLoading ? (
      // This is conditional rendering: if isLoading is true, a loader will appear;
        // otherwise, movie cards will appear according to the movies present in the state.
        // This loading code is predefined; I got it from the internet.

        //loading code starts here.
        <div className="flex justify-center items-center h-screen">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        // loading code ends..
        // we are calling for each movie object present in movies to make a movieCard that makes code reusable
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-5 pb-5 md:pl-[180px] md:pr-[150px]">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="p-4">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-end p-5">
        {page > 1 && !isLoading && (
          // previous page button only appear only if we get the data and isLoading should be false and we should be atleast at page 2.
          <button
            className="bg-indigo-600 text-white px-4 py-2 mr-2 rounded hover:bg-indigo-700 transition mt-2 sm:mt-0 flex items-center gap-2"
            onClick={handlePrevClick}
          >
            <FaArrowLeft />
            <span>prev page</span>
          </button>
        )}

        {page > 0 && !isLoading && (
          // next page button only appear if we get the data and isLoading is false.
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition mt-2 sm:mt-0 flex items-center gap-2"
            onClick={handleNextClick}
          >
            <span>next page</span>
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );

};

export default MovieList;

