import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/netflixish-logo.png";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="absolute w-full flex justify-between items-center z-10 px-10 py-4">
      <Link to="/" className="max-w-[140px]">
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex justify-center items-center gap-5">
        <Link
          to="/saved"
          className="w-[50px] h-[50px] rounded-[50%] flex justify-center items-center bg-[var(--fucsia)] hover:bg-[var(--fucsiaDarker)] hover:text-[--white] duration-300"
        >
          <FaHeart size={"20px"} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
