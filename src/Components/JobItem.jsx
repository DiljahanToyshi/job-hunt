import React from "react";
import { Link } from "react-router-dom";
import frame from "./Image/Frame.png";
import vector from "./Image/Vector.png";

const JobItem = ({ job }) => {
  const { _id, company_name, jobTitle, location, logo, salary ,type} = job;
  return (
    <div>
      <li className="flex flex-col py-4 sm:flex-row sm:justify-between border-2 border-gray-200 rounded-md mt-6 px-10">
        <div className="flex w-full space-x-2 sm:space-x-4">
          <img
            className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
            src={logo}
            alt="Polaroid camera"
          />
          <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                  {jobTitle}
                </h3>
                <p className="text-lg text-gray-400 my-2">{company_name}</p>
                <div className=" text-white font-normal">
                  <button className="border border-indigo-400 bg-indigo-400 hover:bg-violet-400  rounded-sm p-1 px-2 mr-2">
                    {type}
                  </button>
                </div>
                <div className="flex my-2">
                  <img src={frame} alt="" />
                  <p>{location}</p>
                  <img src={vector} className="ml-6" alt="" />
                  <p>{salary}</p>
                </div>
              </div>
              <div className="text-right">
                <Link to={`/${_id}`}>
                  <button
                    type="button"
                    className="mt-8 ml-16 bg-gradient-to-r from-indigo-400 to-violet-400 font-medium  transition duration-200  shadow-md px-4 py-2 text-lg rounded-md border-transparent border-2  text-white"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default JobItem;
