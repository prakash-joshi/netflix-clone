import { useSelector } from "react-redux";
import VideoTitle from "../video/VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const displayMovie = movies[0];
  console.log(displayMovie);

  const { original_title, overview } = displayMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
