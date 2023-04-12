
import { useLoaderData } from 'react-router-dom';
import {
  ChevronDownIcon
} from "@heroicons/react/24/solid";
import JobItem from '../JobItem';
import { useState } from 'react';
const AppliedJobs = () => {
    const { cartArray } = useLoaderData();

    
    const [jobs,setJobs] = useState(cartArray);
   const filterItem = (categItem) =>{
    const updatedItems = cartArray.filter((onsite) =>{
      return onsite.type ===  categItem;
    })
    setJobs(updatedItems);
     console.log(jobs);
   };
  //  console.log(jobs)
  
    
    return (
      <div>
        <h2 className="font-bold text-3xl text-center ml-14 py-5 container bg-indigo-100 ">
          {" "}
          Applied Jobs
        </h2>
        <div className="text-right mt-16 ml-48 flex gap-3  ">
          <button onClick={() =>filterItem('onsite')} className="  bg-indigo-400  hover:bg-violet-300 rounded-md p-2 px-3 flex items-end  text-white font-medium text-lg">
            <span>Onsite</span>
          </button>
          <button onClick={() =>filterItem('remote')} className="  bg-indigo-400  hover:bg-violet-300 rounded-md p-2 px-3 flex items-end  text-white font-medium text-lg">
            <span>remote</span>
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