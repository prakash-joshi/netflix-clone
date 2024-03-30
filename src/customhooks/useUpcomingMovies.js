import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_MOVIE_UPCOMING, API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(API_MOVIE_UPCOMING, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
