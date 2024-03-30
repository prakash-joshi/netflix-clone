import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_MOVIE_POPULAR, API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../store/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(API_MOVIE_POPULAR, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
