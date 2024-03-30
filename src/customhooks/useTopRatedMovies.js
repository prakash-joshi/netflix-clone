import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_MOVIE_TOP_RATED, API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(API_MOVIE_TOP_RATED, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
