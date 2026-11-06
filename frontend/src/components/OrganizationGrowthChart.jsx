import React from "react";
import {  ResponsiveContainer,  AreaChart,  Area,  XAxis,  YAxis,  CartesianGrid,  Tooltip} from "recharts";

const organizationData = [
  { month: "Jan", organizations: 4 },
  { month: "Feb", organizations: 7 },
  { month: "Mar", organizations: 5 },
  { month: "Apr", organizations: 10 },
  { month: "May", organizations: 12 },
  { month: "Jun", organizations: 15 },
  { month: "Jul", organizations: 18 },
  { month: "Aug", organizations: 20 },
];

const OrganizationGrowthChart = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900">
          Organization Growth
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Monthly organization registrations
        </p>
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={organizationData}>
            <defs>
              <linearGradient id="growthColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />

            <YAxis
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="organizations"
              stroke="#6366f1"
              strokeWidth={3}
              fill="url(#growthColor)"
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default OrganizationGrowthChart;