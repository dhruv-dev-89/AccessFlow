import React from 'react'

const StatCard = ({ title, value, description, icon }) => {
  return (
    <div className="group flex flex-col justify-between p-6 w-full min-h-44 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-500">
          {title}
        </h3>
        <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          {value}
        </h2>

        <p className="text-xs text-gray-500 mt-2">
          {description}
        </p>
      </div>
    </div>
  )
}

export default StatCard