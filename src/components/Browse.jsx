import { useEffect } from "react";
import { API_MOVIE_NOW_PLAYING, API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(API_MOVIE_NOW_PLAYING, API_OPTIONS);
    const json = await data.json();
    console.log("json :", json);
    dispatch(addNowPlayingMovies(json.results));
  };

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
