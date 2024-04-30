import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import cover from "../assets/profile1.jpeg";
import { FormEvent, useState } from "react";

const Header = () => {
  const [searchText, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
  };

  return (
    <header id="hero" className="flex flex-col p-4">
      <nav className="flex gap-2 justify-between">
        <Link
          className="tracking-widest bg-red-600 my-auto font-bold p-2 sm:p-3 text-xs sm:text-lg text-white uppercase ml-1 sm:mx-4"
          to={"/"}
        >
          ITion
        </Link>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex bg-slate-100 items-center justify-between gap-1 sm:gap-2 px-2 sm:px-4 border outline-none border-black rounded-md w-[300px]"
        >
          <input
            type="search"
            placeholder="Search Your Fevorite Movie . . . "
            className="bg-transparent outline-none w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <IoIosSearch className="w-3 sm:w-4 h-3 sm:h-4 font-semibold" />
          </button>
        </form>

        <nav className="text-black flex gap-2 text-xs sm:text-lg sm:gap-5 font-semibold justify-center items-center backdrop-blur-xl bg-white/30 px-5 rounded-md">
          <Link className="duration-300 hover:underline" to={"/"}>
            Home
          </Link>
          <Link className="duration-300 hover:underline" to={"/about"}>
            About
          </Link>

          <img
            src={cover}
            draggable={false}
            alt="profile"
            className="w-7 h-7 sm:w-10 sm:h-10 rounded-full"
          />
        </nav>
      </nav>
    </header>
  );
};
export default Header;
