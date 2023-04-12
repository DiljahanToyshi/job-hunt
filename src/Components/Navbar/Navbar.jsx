import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="container bg-indigo-100  mx-14">
        <section className="flex  text-xl justify-between align-middle items-center p-4 ">
          <p className="font-semibold  text-3xl">CarrerLink</p>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-indigo-600" : "default"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? "text-indigo-600" : "default"
            }
          >
            Staistics
          </NavLink>
          <NavLink
            to="/applied-jobs"
            className={({ isActive }) =>
              isActive ? "text-indigo-600" : "default"
            }
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-indigo-600" : "default"
            }
          >
            BLogs
          </NavLink>
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