/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import Data from "../RawData";
import { top } from "../RawData";
import notAwailable from "../assets/Poster-Not-Available.jpg";
import MoviesByCountry from "../components/MoviesByCountry";


const Home = () => {
  const languages: any = [];
  const countries: any = [];
  const genres: any = [];

  const navigate = useNavigate();

  Data.map((item) => {
    // figuring out languages
    item.movielanguages.map((i) => {
      if (!languages.includes(i)) {
        languages.push(i);
      }
    });

    // figuring out countries
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
  });

  const hnadleMovie = (name: string) => {
  navigate(`/movie/${name}`)
  }

  return (
    <section className="max-w-screen-lg m-auto">
      <h1 className="font-bold text-2xl">Latest Movies</h1>
      <div className="flex flex-row gap-6 flex-wrap m-auto items-center my-5 justify-center">
        {top.map((item, index) => (
          <div
            className="w-36 h-auto p-2 border cursor-pointer rounded-md bg-gray-100 border-black duration-200 hover:scale-105"
            key={index}
            onClick={()=>hnadleMovie(item.movietitle)}
          >
            <img
            className="rounded-md"
              src={item.moviemainphotos[0] ? item.moviemainphotos[0] : notAwailable}
              onError={e=> {
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

      <MoviesByCountry />
    </section>
  );
};

export default Home;
