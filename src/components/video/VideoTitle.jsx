const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="absolute text-white flex flex-col mt-[27%] mx-10 w-screen aspect-video ">
      <span className="font-bold text-6xl text-white">{title}</span>
      <span className="w-3/5 py-5">{overview}</span>
      <div className="flex gap-3">
        <button className="bg-white text-black px-10 py-3 rounded-lg text-xl hover:bg-slate-200 ">
          ▷ Play
        </button>
        <button className="bg-slate-700 px-10 py-3 rounded-lg text-xl hover:bg-slate-500">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
