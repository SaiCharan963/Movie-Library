import React, { useState } from 'react'

export const MyContext = React.createContext();

const ContextProvider = ({children}) => {
    const [movieName, setMovieName] = useState(""); // used to just to store the movie name in the search field.
    const [movies, setMovies] = useState([]); // after search, store the array of movie objects.
    const [page, setPage] = useState(0); // stores currently user is in which page.
    const [value, setValue] = useState(""); // store the movieName only, for future references.
    const [watchListMovies, setWatchListMovies] = useState(JSON.parse(localStorage.getItem("movies")) || []); //store the array of movie objects from local storage else assign an empty array.
    const [isLoading, setIsLoading] = useState(false); // while fetching isLoading will be true else false


    const data = {
      movieName,
      setMovieName,
      movies,
      setMovies,
      page,
      setPage,
      value,
      setValue,
      watchListMovies,
      setWatchListMovies,
      isLoading,
      setIsLoading
    };

    
    {/* Provides data to App’s children via context */}
  return (
    <MyContext.Provider value={data}>{children}</MyContext.Provider>
  );
}

export default ContextProvider