import React from 'react'

const organizations = [
  {
    id: 1,
    name: "TechCorp",
    admin: "Rahul Sharma",
    members: 25,
    status: "Active",
    createdAt: "01 Nov 2026"
  },
  {
    id: 2,
    name: "InnovateX",
    admin: "Aman Verma",
    members: 18,
    status: "Active",
    createdAt: "30 Oct 2026"
  },
  {
    id: 3,
    name: "CloudSync",
    admin: "Priya Singh",
    members: 12,
    status: "Inactive",
    createdAt: "29 Oct 2026"
  },
  {
    id: 4,
    name: "DevSphere",
    admin: "Arjun Kumar",
    members: 32,
    status: "Active",
    createdAt: "27 Oct 2026"
  }
]

const RecentOrganizationTable = () => {
  return (
    
      <div className="overflow-x-auto rounded-xl border border-gray-300">
        <table className="w-full text-left">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Organization</th>
              <th className="p-4">Admin</th>
              <th className="p-4">Members</th>
              <th className="p-4">Status</th>
              <th className="p-4">Created At</th>
            </tr>
          </thead>

          <tbody>
            {organizations.map((org) => (
              <tr key={org.id} className="border-t border-gray-200">

                <td className="p-4 font-medium">{org.name}</td>

                <td className="p-4">{org.admin}</td>

                <td className="p-4">{org.members}</td>

                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    org.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {org.status}
                  </span>
                </td>

                <td className="p-4">{org.createdAt}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
  )
}

export default RecentOrganizationTable