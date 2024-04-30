import { SetStateAction, useState } from "react";
import Data, { DataInterface } from "../RawData";
import notAwailable from "../assets/Poster-Not-Available.jpg";
import { useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const { searchText } = useParams();
  const navigate = useNavigate();
  const searchResult: DataInterface[] = [];

  const countries: string[] = [];
  const languages: string[] = [];
  const genres: string[] = [];

  Data.map(async (item) => {
    item.moviecountries.map((i) => {
      if (!countries.includes(i)) {
        countries.push(i);
      }
    });

    item.moviegenres.map((i) => {
      if (!genres.includes(i)) {
        genres.push(i);
      }
    });

    // figuring out languages
    item.movielanguages.map((i) => {
      if (!languages.includes(i)) {
        languages.push(i);
      }
    });
  });

  Data.map((i) => {
    if (
      i.movietitle === searchText ||
      countries.includes(String(searchText)) ||
      languages.includes(String(searchText)) ||
      genres.includes(String(searchText))
    ) {
      searchResult.push(i);
    }
  });

  const handleMovie = (name: string) => {
    navigate(`/movie/${name}`);
  };

  console.log(searchResult);

  return (
    <section className="max-w-screen-lg m-auto p-8">
      <h1 className="font-semibold text-2xl">Search Result</h1>
      <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
        {searchResult.map((item, index) => (
          <div
            className="w-28 sm:w-32 h-auto p-2 border cursor-pointer rounded-md bg-gray-100 border-black duration-200 hover:scale-105"
            key={index}
            onClick={() => handleMovie(item.movietitle)}
          >
            <img
              className="rounded-md"
              src={
                item.moviemainphotos[0] ? item.moviemainphotos[0] : notAwailable
              }
              onError={(e) => {
                e.currentTarget.src = notAwailable;
              }}
              alt="poster"
            />

            <div className="flex flex-col gap-1 mt-2">
              <h1 className="truncate font-semibold">{item.movietitle}</h1>
              <p className="truncate text-xs">IMDB ID: {item.imdbmovieid}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
