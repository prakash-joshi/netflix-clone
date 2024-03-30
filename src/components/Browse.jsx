import useNowPlayingMovies from "../customhooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./home/MainContainer";
import SecondaryContainer from "./home/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
