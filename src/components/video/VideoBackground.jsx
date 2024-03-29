import { useEffect } from "react";
import { API_GET_MOVIE_VIDEOS, API_OPTIONS } from "../../utils/constants";

const VideoBackground = (props) => {
  const { movieId } = props;

  const getMovieVideos = async () => {
    const data = await fetch(
      API_GET_MOVIE_VIDEOS.replace("[MOVIE_ID]", movieId),
      API_OPTIONS
    );
    const json = await data.json();
    console.log("json :", json);

    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];

    console.log("trailer : ", trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/d2OONzqh2jk?si=J4H6DttnWdM5-G6F"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
