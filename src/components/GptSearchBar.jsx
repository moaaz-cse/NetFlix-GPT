import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
// import openai from "../utils/openAi";

const GptSearchBar = () => {
  const currentLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // make an api call to GPT-API and get Movie results
    // const getQuery =
    //   "Act as a movie recomendation system and suggest some movies for the query" +
    //   searchText.current.value +
    //   ". only give name of the movies, comma seperated like the example result giving ahead: Gadar, Showlay, Don, Kick, koi mill gaya";
    // const gptResults = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: getQuery }],
    // });
    // console.log(gptResults.choices);
  };
  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[currentLang].gptSearchPlaceholder}
          className="p-4 m-4 text-white col-span-9"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {lang[currentLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
