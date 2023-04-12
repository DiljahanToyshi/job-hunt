
import { useLoaderData } from 'react-router-dom';
import {
  ChevronDownIcon
} from "@heroicons/react/24/solid";
import JobItem from '../JobItem';
import { useState } from 'react';
const AppliedJobs = () => {
    const { cartArray } = useLoaderData();
    const [jobs,setJobs] = useState(cartArray);
    // const appliedJob = localStorage.getItem('applied-job');
  //  console.log(cartArray);
   const filterItem = (categItem) =>{
    const updatedItems = cartArray.filter((fulltime) =>{
      return fulltime.type ==  categItem;
    })
    setJobs(updatedItems)
   };
   console.log(jobs)
  
    
    return (
      <div>
        <h2 className="font-bold text-3xl text-center ml-14 py-5 container bg-indigo-100 ">
          {" "}
          Applied Jobs
        </h2>
        <div className="text-right mt-16 ml-48  ">
          <button onClick={() =>filterItem('full-time')} className="  bg-indigo-200 rounded-md p-2 px-3 flex items-end ">
            <ChevronDownIcon className="h-6 w-6 text-violet-400 mr-1" />{" "}
            <span>Filter By</span>
          </button>
        </div>

        <div className=" m-3 flex items-start justify-center ">
          <div className="flex flex-col  ">
            <ul className="flex flex-col ">
              {cartArray.map((job) => (
                <JobItem key={job._id} job={job}></JobItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default AppliedJobs;