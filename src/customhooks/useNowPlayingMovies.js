import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_MOVIE_NOW_PLAYING, API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../store/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(API_MOVIE_NOW_PLAYING, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};
export default useNowPlayingMovies;
