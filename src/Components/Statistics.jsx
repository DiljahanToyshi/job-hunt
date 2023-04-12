import React from 'react';
import "./Statistics.css"
import { PieChart, Pie } from 'recharts';

import { Tooltip } from 'recharts';
const Statistics = () => {
  const data = [
    { name: "Assignment 1", value: 45 },
    { name: "Assignment 2", value: 48 },
    { name: "Assignment 3", value: 60 },
    { name: "Assignment 4", value: 30 },
    { name: "Assignment 5", value: 28 },
    { name: "Assignment 6", value: 58 }
  ]
  return (
    <div>
      <h2 className="text-3xl font-semibold  bg-indigo-100  py-9 mx-14 container text-center  px-4">
        {" "}
        Assignment Result
      </h2>
      <div className="ml-80">
        {" "}
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            label
          />
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;