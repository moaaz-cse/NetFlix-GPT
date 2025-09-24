import { useState, useEffect } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ytKey, setYtKey] = useState(null);

  const PopUpVideo = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );
    const popUp = filterData.length ? filterData[0] : json.results[0];

    setYtKey(popUp.key); // this will trigger re-render
  };

  const onClickOpenHandler = (id) => {
    setIsOpen(true);
    PopUpVideo(id);
  };

  const onClickCloseHandler = () => {
    setIsOpen(false);
    setYtKey(null);
  };

  return (
    <>
      {/* Thumbnail */}
      <div
        className="w-48 relative cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105"
        onClick={() => onClickOpenHandler(id)}
      >
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Popup Video Modal */}
      {isOpen && ytKey && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClickCloseHandler} // close when clicking background
        >
          <div className="w-[60%] relative">
            <iframe
              src={`https://www.youtube.com/embed/${ytKey}?autoplay=1&mute=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-2xl w-full h-[400px]"
            ></iframe>

            {/* Close button */}
            <button
              onClick={onClickCloseHandler}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full px-2 py-1 shadow-lg hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
