import { Link } from "react-router-dom";
import cover from "../assets/profile1.jpeg";

const Header = () => {
  return (
    <header id="hero" className="flex flex-col gap-32">
      <nav className="flex gap-2 justify-between ">
        <Link
          className="tracking-widest bg-red-600 font-bold p-3 h-12 text-white mt-5 uppercase mx-4"
          to={"/"}
        >
          Netflix
        </Link>

        <nav className="text-black flex gap-5 font-semibold justify-center items-center mt-5 mx-10 backdrop-blur-xl bg-white/30 px-5 rounded-md">
          <Link className="duration-300 hover:underline" to={"/"}>Movie</Link>
          <Link className="duration-300 hover:underline" to={"/"}>Hindi</Link>
          <Link className="duration-300 hover:underline" to={"/"}>About</Link>

          <img src={cover} draggable={false} alt="profile" className="w-10 h-10 rounded-full" />
        </nav>
      </nav>

      {/* <div className="text-white flex flex-col ml-64 select-none">
        <p className="font-bold text-2xl">Rogue One:</p>
        <p className="text-gray-300 text-xl tracking-wider">A Star War Story</p>
      </div> */}
    </header>
  );
};
export default Header;
