import { useSelector } from "react-redux";
import VideoList from "../video/VideoList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  if (
    movies?.nowPlayingMovies === null ||
    movies?.topRatedMovies === null ||
    movies?.popularMovies === null ||
    movies?.upcomingMovies === null
  )
    return;

  return (
    movies && (
      <div className="relative -mt-[15%] z-20">
        <VideoList title={"Now Playing"} movies={movies?.nowPlayingMovies} />;
        <VideoList title={"Top Rated"} movies={movies?.topRatedMovies} />;
        <VideoList title={"Popular"} movies={movies?.popularMovies} />;
        <VideoList title={"Upcoming"} movies={movies?.upcomingMovies} />;
      </div>
    )
  );
};

export default SecondaryContainer;
