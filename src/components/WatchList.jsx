import { useContext } from 'react'
import WatchListCard from './WatchListCard';
import { MyContext } from './ContextProvider';
import { NavLink } from 'react-router-dom';

const WatchList = () => {
  const {watchListMovies} = useContext(MyContext); // got from contextProvider

  return (
    <div>
      <div className="text-center p-8 mb-8">
        <h1 className="text-5xl font-bold text-green-500">Watch List</h1>
        <h3 className="text-base font-semibold text-red-500">
          {/*tells the count, how many movies are their in the WatchList.*/}
          Movies Count - {watchListMovies.length}
        </h3>
      </div>
      {watchListMovies.length === 0 ? (
        <header className="shadow p-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-indigo-600">
            No Movies added in watchlist.
          </h1>
        </header>
      ) : (
        // display all movies ptresent in watchListMovies array.
        watchListMovies.map((ele) => (
          <div key={ele.imdbID} className="flex items-center justify-center">
            <WatchListCard movie={ele} />
          </div>
        ))
      )}

      <div className="flex items-center justify-center pb-6">
        {/*this Go back button is a navlink take you to the home route.*/}
        <NavLink to={"/"}>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition mt-2 sm:mt-0">
            Go back
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default WatchList