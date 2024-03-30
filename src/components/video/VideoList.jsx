import VideoCard from "./VideoCard";

const VideoList = (props) => {
  const { title, movies } = props;

  return (
    <div className="py-6 px-3">
      <h1 className="text-3xl text-white py-3"> {title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <VideoCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
