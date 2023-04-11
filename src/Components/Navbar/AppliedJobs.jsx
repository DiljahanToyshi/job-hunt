import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utils/fakedb.js';
import { useLoaderData } from 'react-router-dom';
import {
  ChevronDownIcon
} from "@heroicons/react/24/solid";
const AppliedJobs = () => {
    const [jobs,setJobs]= useState([]);
    const aJobs = useLoaderData();
    // const appliedJob = localStorage.getItem('applied-job');
 useEffect(() =>{
      const savedJob = getShoppingCart();
      let newArr = [];
      for (const _id in savedJob) {
        const foundJobs = aJobs.find((job) => job._id == _id);
        if (foundJobs) {
         newArr.push(foundJobs)
        }
      }
      setJobs(newArr)
 },[])
   console.log(jobs)
   
    
    return (
      <div>
        <h1>this is AppliedJobs :{jobs.length}</h1>

        <div className="text-right mt-5  ">
          <button className=" bg-indigo-200 rounded-md p-2 px-3 flex items-end ">
            <ChevronDownIcon className="h-6 w-6 text-violet-400 mr-1" /> Filter
            By
          </button>
        </div>
      </div>
    );
};

export default AppliedJobs;