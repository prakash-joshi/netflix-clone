const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="text-white flex flex-col pt-[25%] px-10">
      <span className="font-bold text-6xl text-white">{title}</span>
      <span className="w-3/5 py-5">{overview}</span>
      <div className="flex gap-3">
        <button className="bg-slate-400 px-10 py-3 rounded-lg text-xl ">
          ▷ Play
        </button>
        <button className="bg-slate-400 px-10 py-3 rounded-lg  text-xl">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
