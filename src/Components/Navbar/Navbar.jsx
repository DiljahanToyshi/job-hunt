import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="container">
        <section className="flex  text-xl justify-between align-middle items-center m-7 ml-28 ">
          <p className="font-semibold  text-3xl">CarrerLink</p>
          <Link to="/">Home</Link>
          <Link to="/statistics">Staistics</Link>
          <Link to="/applied-jobs">Applied Jobs</Link>
          <Link to="/blogs">BLogs</Link>
          <button
            type="button"
            className=" bg-gradient-to-r from-indigo-400 to-violet-400 font-medium  transition duration-200  shadow-md  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-md border-transparent border-2  text-white"
          >
            Start Appliying
          </button>
        </section>
      </div>
    );
};

export default Navbar;