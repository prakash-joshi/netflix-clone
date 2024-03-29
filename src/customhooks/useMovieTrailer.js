import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_GET_MOVIE_VIDEOS, API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../store/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      API_GET_MOVIE_VIDEOS.replace("[MOVIE_ID]", movieId),
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
