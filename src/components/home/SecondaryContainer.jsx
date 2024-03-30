import { useSelector } from "react-redux";
import VideoList from "../video/VideoList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  if (movies?.nowPlayingMovies === null) return;

  return (
    <div className="relative -mt-[15%] z-20">
      <VideoList title={"Now Playing"} movies={movies?.nowPlayingMovies} />;
      <VideoList title={"Now Playing"} movies={movies?.nowPlayingMovies} />;
      <VideoList title={"Now Playing"} movies={movies?.nowPlayingMovies} />;
      <VideoList title={"Now Playing"} movies={movies?.nowPlayingMovies} />;
    </div>
  );
};

export default SecondaryContainer;
