import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
// import frame from "./Image/Frame.png";
// import vector from "./Image/Vector.png";
import {
  CurrencyDollarIcon,
  MapPinIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const JobDetails = () => {
  const jobs = useLoaderData();

  const [job, setJob] = useState({});
  const jobDetail = useParams();
  useEffect(() => {
    fetch("/jobhunt.json")
      .then((res) => res.json())
      .then((data) => {
        const jobData = data.find((job) => job._id == jobDetail.jobid);
        setJob(jobData);
      });
  }, []);
  console.log(job);

  const {
    company_name,
    responsibility,
    description,
    jobTitle,
    location,
    experience,

    salary,
    requirements,
  } = job;

  return (
    <div>
      <h2 className="text-3xl mt-4 font-semibold text-center">Job Details</h2>
      <br />
      <div className=" grid grid-cols-3 gap-10 px-24 mt-12">
        <div className="col-span-2">
          <p>
            <span className="font-semibold"> Job Description: </span>
            <span className="text-gray-400">{description}</span>
          </p>
          <p>
            <span className="font-semibold"> Job Responsibility: </span>
            <span className="text-gray-400">{responsibility}</span>
          </p>
          <p>
            <span className="font-semibold"> Educational Requirements: </span>
            <span className="text-gray-400">{requirements}</span>
          </p>
          <p>
            <span className="font-semibold"> Experiences: </span>
            <span className="text-gray-400">{experience}</span>
          </p>
        </div>
        <div className="bg-indigo-100 rounded-md p-6">
          <p className="text-center font-semibold">Job Details</p>
          <hr className="mt-2 " />
          <div>
            <div className="flex mt-2">
              <CurrencyDollarIcon className="h-6 w-6 text-violet-400" />
              <p>
                Salary: <span className="text-gray-400">{salary}</span>
              </p>
            </div>{" "}
            <div className="flex">
              <CalendarDaysIcon className="h-6 w-6 text-violet-400" />
              <p>
                Job Title: <span className="text-gray-400">{jobTitle}</span>
              </p>
            </div>
            <p className="font-semibold text-left">Contact Information</p>
            <hr className="mt-2 " />
            <div className="flex">
              <PhoneIcon className="h-6 w-6 text-violet-400" />
              <p>
                Phone :<span className="text-gray-400"> 01750-00 00 00</span>
              </p>
            </div>
            <div className="flex">
              <EnvelopeIcon className="h-6 w-6 text-violet-400" />
              <p>
                Email :<span className="text-gray-400">info@gmail.com</span>
              </p>
            </div>
            <div className="flex">
              <MapPinIcon className="h-6 w-6 text-violet-400" />
              <p>
                Address :<span className="text-gray-400">{location}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mr-24">
        <Link >
          <button
            type="button"
            className=" bg-gradient-to-r from-indigo-400 to-violet-400 font-medium  transition duration-200  shadow-md  px-24 py-1 text-lg mt-3  rounded-md border-transparent border-2  text-white"
          >
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
