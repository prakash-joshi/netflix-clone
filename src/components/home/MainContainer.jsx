import { useSelector } from "react-redux";
import VideoTitle from "../video/VideoTitle";
import VideoBackground from "../video/VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const displayMovie = movies[0];
  console.log(displayMovie);

  const { original_title, overview, id } = displayMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
