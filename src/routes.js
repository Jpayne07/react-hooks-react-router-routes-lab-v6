import React from "react";
import ReactDOM from "react-dom/client";
import Home from './pages/Home.js'
import Directors from './pages/Directors.js'
import Actors from './pages/Actors.js'
import { createBrowserRouter } from "react-router-dom";
import Movie from "./pages/Movie.js";
import ErrorPage from "./pages/ErrorPage.js";




const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path:"/actors",
    element: <Actors />
  }
]

export default routes;