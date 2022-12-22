import { Route, Routes } from "react-router-dom";
// import HomePage from "./homePage/HomePage";
import SharedLayout from "./sharedLayout/SharedLayouts";
// import MoviesPage from "./moviesPage/MoviesPage";
import MovieDetailsPage from "./moviesDetailsPage/MovieDetailsPage";
// import Cast from "./cast/Cast";
// import Reviews from "./reviews/Reviews";
import NotFound from "./notFound/NotFound";
import { lazy } from "react";

const HomePage = lazy(() => import("./homePage/HomePage"));
const MoviesPage = lazy(() => import("./moviesPage/MoviesPage"));
const Cast = lazy(() => import("./cast/Cast"));
const Reviews = lazy(() => import("./reviews/Reviews"));


export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );


};
