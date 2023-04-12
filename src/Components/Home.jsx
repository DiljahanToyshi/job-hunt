import React, { useState } from 'react';
import img from "./Image/P3OLGJ11.png";
import img1 from "./Image/accounts.png";
import img2 from "./Image/business.png";
import img3 from "./Image/chip.png";
import img4 from "./Image/media.png"
import { useLoaderData } from 'react-router-dom';
import Job from './Navbar/Job';

const Home = () => {
const jobs = useLoaderData();
const [showAll,setShowAll] = useState(false);

const handleShowAll = () => {
  setShowAll(true);
}
    return (
      <div className="">
        <div className="flex container mx-14  items-center px-5  bg-indigo-50 ">
          <div className="text-left">
            <p className="text-6xl font-semibold">
              One Step Closer To
              <span className="text-indigo-400">Your Dream Job</span>
            </p>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button
              type="button"
              className=" bg-gradient-to-r from-indigo-400 to-violet-400 font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-md border-transparent border-2  text-white"
            >
              Get Started
            </button>
          </div>
          <img src={img} className="h-96" alt="" />
        </div>

        <section className="text-center mt-12">
          <p className="font-semibold text-4xl">Job Category List</p>
          <p className="text-md text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="flex justify-between mx-12 mt-4 ">
            <div className="bg-indigo-100 rounded-md shadow-sm p-10 ">
              <img src={img1} className="bg-indigo-200 rounded-md p-2" alt="" />
              <p>Account & Finance</p>
              <p className="text-gray-400 text-sm">300 Jobs Available</p>
            </div>
            <div className="bg-indigo-100 rounded-md shadow-sm p-10">
              <img src={img2} className="bg-indigo-200 rounded-md p-2" alt="" />
              <p>Creative Design</p>
              <p className="text-gray-400 text-sm">100+ Jobs Available</p>
            </div>
            <div className="bg-indigo-100 rounded-md shadow-sm p-10">
              <img src={img3} className="bg-indigo-200 rounded-md p-2" alt="" />
              <p>Marketing & Sales</p>
              <p className="text-gray-400 text-sm">140 Jobs Available</p>
            </div>
            <div className="bg-indigo-100 rounded-md shadow-sm p-10">
              <img src={img4} className="bg-indigo-200 rounded-md p-2" alt="" />
              <p>Engineering Job</p>
              <p className="text-gray-400 text-sm">200 Jobs Available</p>
            </div>
          </div>
        </section>

        <section className="container text-center mt-14 mx-auto">
          <p className="font-semibold text-4xl">Featured Jobs</p>
          <p className="text-lg text-gray-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="grid grid-cols-2 gap-4">
            {jobs.slice(0, showAll ? 6 : 4).map((job) => (
              <Job key={job._id} job={job}></Job>
            ))}
          </div>
          <div className="text-center mt-5">
            {!showAll && (
              <button
                onClick={handleShowAll}
                type="button"
                className=" bg-gradient-to-r from-indigo-400 to-violet-400 font-medium  transition duration-200  shadow-md mx-auto  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-md border-transparent border-2  text-white"
              >
                See All Jobs
              </button>
            )}
          </div>
        </section>
      </div>
    );
};

export default Home;