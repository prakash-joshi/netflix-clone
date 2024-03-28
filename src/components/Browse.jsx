import useNowPlayingMovies from "../customhooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./home/MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
