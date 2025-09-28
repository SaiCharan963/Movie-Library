import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="text-2xl text-center pt-10 font-bold text-red-500">
      <h1>Oops!</h1>
      <p className='pb-3'>Sorry, an unexpected error has occurred.</p>
      <NavLink to={"/"}>
        <button className="bg-green-600 text-white text-lg px-4 py-2 rounded hover:bg-green-700 transition mt-2 sm:mt-0">
          Go back to Home
        </button>
      </NavLink>
    </div>
  );
}

export default ErrorPage