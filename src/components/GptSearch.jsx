import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BANNER } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="md:h-full md:w-full  h-screen object-cover"
          style={{ maxwidth: "1905px" }}
          src={BANNER}
          alt="banner"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
