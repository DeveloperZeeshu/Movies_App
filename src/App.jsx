import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import './App.css';
import { ErrorPage } from "./pages/ErrorPage";
import { getMovieData } from "./api/getAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "./api/getMovieDetails";

const App = () => {
 const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movie',
        element: <Movie />,
        loader: getMovieData,
      },
      {
        path: '/movie/:movieID',
        element: <MovieDetails />,
        loader: getMovieDetails, 
      },
      {
        path: '/contact',
        element: <Contact />,
        action: contactData, 
      }
    ],
  },
 ]);
  return <RouterProvider router={router}/>
};

export default App;
