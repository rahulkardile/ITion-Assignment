import { useParams } from "react-router-dom";
import Data from "../RawData";
import { useEffect, useState } from "react";
import { DataInterface } from "../RawData";
import notAwailable from "../assets/Poster-Not-Available.jpg";

const Movie = () => {
  const { name } = useParams();

  const [movie, setMovie] = useState<DataInterface>({
    imdbmovieid: "",
    moviecountries: [],
    moviegenres: [],
    movielanguages: [],
    moviemainphotos: [],
    movietitle: "",
  });

  useEffect(() => {
    Data.map((item) => {
      if (item.movietitle === name) {
        setMovie({
          imdbmovieid: item.imdbmovieid,
          moviecountries: item.moviecountries,
          moviegenres: item.moviegenres,
          movielanguages: item.movielanguages,
          moviemainphotos: item.moviemainphotos,
          movietitle: item.movietitle,
        });
      }
    });
  }, []);

  return (
    <section className="m-auto flex justify-center items-center flex-col mt-4">
      <img
        src={movie.moviemainphotos[0] ? movie.moviemainphotos[0] : notAwailable}
        alt="poster"
        className="w-[230px] h-auto"
      />

      <div className="mt-2">
        <h1 className="font-bold text-center">{movie.movietitle}</h1>
        <p className="text-xs">IMDB ID : {movie.imdbmovieid}</p>
      </div>

      <div className="flex gap-1 mt-3">
        <h1 className="font-bold">Languages :</h1>
        {movie.movielanguages.map((i, index) => (
            <option value="i" key={index}>{i}</option>
        ))}
      </div>

      <div className="flex gap-1 mt-3">
        <h1 className="font-bold capitalize text-start">countries :</h1>
        {movie.moviecountries.map((i, index) => (
            <option value="i" key={index}>{i}</option>
        ))}
      </div>

      <div className="flex gap-1 mt-3">
        <h1 className="font-bold capitalize text-start">genres :</h1>
        {movie.moviegenres.map((i, index) => (
            <option value="i" key={index}>{i}</option>
        ))}
      </div>

    </section>
  );
};

export default Movie;
