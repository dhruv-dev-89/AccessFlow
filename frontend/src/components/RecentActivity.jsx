import React from 'react'
import { Clock, Building2, UserPlus, ShieldCheck, Ban } from 'lucide-react'



const RecentActivity = ({activities}) => {
  return (
    <div className="mt-12">

      <div className="flex items-center gap-2 mb-6">
        <Clock size={24} />
        <h2 className="text-2xl font-bold text-black">
          Recent Platform Activity
        </h2>
      </div>

      <div className="border border-gray-300 rounded-2xl overflow-hidden">

        <table className="w-full text-left">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">User</th>
              <th className="p-4">Activity</th>
              <th className="p-4">Organization</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id} className="border-t border-gray-200">

                <td className="p-4 font-medium">
                  {activity.user}
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {activity.icon}
                    {activity.action}
                  </div>
                </td>

                <td className="p-4">
                  {activity.organization}
                </td>

                <td className="p-4">
                  {activity.date}
                </td>

                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    activity.status === "Suspended"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}>
                    {activity.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  )
}

export default RecentActivity