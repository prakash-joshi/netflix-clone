import useNowPlayingMovies from "../customhooks/useNowPlayingMovies";
import usePopularMovies from "../customhooks/usePopularMovies";
import useTopRatedMovies from "../customhooks/useTopRatedMovies";
import useUpcomingMovies from "../customhooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./home/MainContainer";
import SecondaryContainer from "./home/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
