import { CDN_MOVIE_POSTER_URL } from "../../utils/constants";

const VideoCard = (props) => {
  const { movie } = props;

  return (
    <div className="w-48 pr-4">
      <img alt="Movie card" src={CDN_MOVIE_POSTER_URL + movie?.poster_path} />
    </div>
  );
};

export default VideoCard;
