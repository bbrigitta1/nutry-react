import React, { } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function ChartSimpleLine({simpleLineChartData}) {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={simpleLineChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="target" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  
}

export default ChartSimpleLine;
