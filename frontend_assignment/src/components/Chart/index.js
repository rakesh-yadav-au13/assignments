import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Chart = ({ chartData }) => {
  console.log(chartData);
  return (
    <div className="chart">
      <PieChart width={240} height={300}>
        <Pie
          data={chartData}
          innerRadius={0}
          outerRadius={75}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label
        >
          {chartData &&
            chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Chart;
