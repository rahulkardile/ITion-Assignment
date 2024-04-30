import { SetStateAction, useEffect, useState } from "react";
import Data, { DataInterface } from "../RawData";
import { useNavigate } from "react-router-dom";
import notAwailable from "../assets/Poster-Not-Available.jpg";

const MoviesByCountry = () => {
  const countries: string[] = [];
  const languages: string[] = [];
  const genres: string[] = [];

  const [country, setCountry] = useState("India");
  const [language, SetLanguages] = useState<SetStateAction<string>>();
  const [genress, SetGenres] = useState<SetStateAction<string>>();
  const navigate = useNavigate();

  const GetCountry: DataInterface[] = [];

  // Getting all countries data
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

  useEffect(() => {
    Data.map((i) => {
      if (i.moviecountries.includes("India")) {
        GetCountry.push(i);
      }
    });
  }, []);

  // updating data when countries changes
  if (country || language || genres) {
    Data.map((i) => {
      if (
        (country && i.moviecountries.includes(country)) ||
        (language && i.movielanguages.includes(String(language))) ||
        (genres && genres.includes(String(genress)))
      ) {
        return GetCountry.push(i);
      }
    });
  }

  const hnadleMovie = (name: string) => {
    navigate(`/movie/${name}`);
  };

  return (
    <div className="max-w-screen-lg mt-7 mb-32">
      <h1 className="font-semibold text-xl ml-5">Filter The Movies</h1>
      <section className="ml-8 mt-4 border-y p-3 flex mx-7 justify-between">
        <div className="">
          <label htmlFor="Contries" className="">
            Contries
          </label>
          <select
            name="Contries"
            onChange={(e) => setCountry(e.target.value)}
            className="h-auto w-auto ml-5"
            defaultValue={"India"}
          >
            {countries.map((i: string, index) => {
              return (
                <option key={index} className="ml-10" value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>

        <div className="">
          <label htmlFor="Languages" className="">
            Languages
          </label>
          <select
            name="Languages"
            onChange={(e) => SetLanguages(e.target.value)}
            className="h-auto w-auto ml-5"
            defaultValue={"Hindi"}
          >
            {languages.map((i: string, index) => {
              return (
                <option key={index} className="ml-10" value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>

        <div className="">
          <label htmlFor="Genres" className="">
            Genres
          </label>
          <select
            name="Genres "
            onChange={(e) => SetGenres(e.target.value)}
            className="h-auto w-auto ml-5"
            defaultValue={"Action"}
          >
            {genres.map((i: string, index) => {
              return (
                <option key={index} className="ml-10" value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>
      </section>
      <section className="flex flex-row gap-6 flex-wrap my-5 justify-center">
        {GetCountry.map((i) => (
          <div
            className="w-36 h-auto p-2 border rounded-md bg-gray-100 border-black duration-200 hover:scale-105"
            key={i.imdbmovieid}
            onClick={() => hnadleMovie(i.movietitle)}
          >
            <img
              className="rounded-md"
              src={i.moviemainphotos[0] ? i.moviemainphotos[0] : notAwailable}
              onError={(e) => {
                e.currentTarget.src = notAwailable;
              }}
              alt="poster"
            />

            <div className="flex flex-col gap-1 mt-2">
              <h1 className="truncate font-semibold">{i.movietitle}</h1>
              <p className="truncate text-xs">IMDB ID: {i.imdbmovieid}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MoviesByCountry;
