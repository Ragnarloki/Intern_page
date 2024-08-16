import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const CircularChart = () => {
  
  const totalDays = 10; // Total number of days
  const completedDays = 1; // Example of completed days

  const data = [
    { name: "Completed", value: completedDays },
    { name: "Remaining", value: totalDays - completedDays }
  ];

  const COLORS = ["#fbbf24", "#2b2b45"];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#D4CAAA]">
   
     <div className='w-[700px] flex justify-evenly rounded-lg h-[400px] bg-white'>
      <div className='w-[50%]'>
      <PieChart width={250} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={470}
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>

      </div>
      <div className='flex flex-row h-full align-middle justify-center'>
         <ul>
          <li>internship</li>
          
          <li>No of days</li>
          <li>Completed</li>
         </ul>

      </div>
     </div>
      
    
    </div>
  );
};

export default CircularChart;
