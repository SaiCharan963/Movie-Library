import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieSearch from "./components/MovieSearch";
import WatchList from "./components/WatchList";
import ErrorPage from "./components/ErrorPage";


// Created two routes: one for searching and displaying movies, and another for showing watchlist movies
const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieSearch />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/watchlist",
    element: <WatchList />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
