import React from 'react';
import frame from '../Image/Frame.png';
import vector from '../Image/Vector.png';
import JobDetails from '../JobDetails';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const { company_name, jobTitle, location, logo, salary,_id } = job;
    
    return (
      <div>
        <div className=" mt-8 rounded-md border-2 border-gray-300 text-left pl-5 pb-5 ">
          <img className="h-20 pt-3" src={logo} alt="" />
          <p className="font-semibold text-xl">{jobTitle}</p>
          <p className="text-lg text-gray-400 my-2">{company_name}</p>
          <div className=" text-violet-400">
            <button className="border border-indigo-400 rounded-sm p-1 px-2 mr-2">
              Full Time
            </button>
            <button className="border border-indigo-400 rounded-sm p-1 px-2">
              OnSite
            </button>
          </div>
          <div className="flex my-2">
            <img src={frame} alt="" />
            <p>{location}</p>
            <img src={vector} className="ml-6" alt="" />
            <p>{salary}</p>
          </div>
          <Link to={`/${_id}`}>
            <button
              type="button"
              className=" bg-gradient-to-r from-indigo-400 to-violet-400 font-medium  transition duration-200  shadow-md px-4 py-2 text-lg rounded-md border-transparent border-2  text-white"
            >
              View Details
            </button>
          </Link>
        </div>
       
      </div>
    );
};

export default Job;