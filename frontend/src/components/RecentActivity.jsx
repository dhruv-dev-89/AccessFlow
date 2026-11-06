import React from "react";
import {
  Building2,
  UserPlus,
  Database,
  Ban,
  ArrowUpRight,
} from "lucide-react";



const RecentActivity = ({activities}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Recent Platform Activity
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Latest activities across the platform
          </p>
        </div>

        <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800">
          View All
          <ArrowUpRight size={16} />
        </button>
      </div>

   
      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div key={activity.id} className="flex items-start gap-4">

              <div className={`p-3 rounded-xl ${activity.color}`}>
                <Icon size={20} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900">
                  {activity.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {activity.description}
                </p>
              </div>

              <span className="text-xs text-gray-400 whitespace-nowrap">
                {activity.time}
              </span>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default RecentActivity
