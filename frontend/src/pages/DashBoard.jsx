
import RecentActivity from '@/components/RecentActivity'
import RecentOrganizationTable from '@/components/RecentOrganizationTable'
import StatCard from '@/components/StatCard'
import { Ban, Building2, ShieldCheck, UserPlus } from 'lucide-react'
import React from 'react'


const DashBoard = () => {

  const activities = [
    {
      id: 1,
      user: "Rahul Sharma",
      action: "Created a new organization",
      organization: "TechCorp",
      date: "03 Nov 2026",
      icon: <Building2 size={20} />,
      status: "Created"
    },
    {
      id: 2,
      user: "Aman Verma",
      action: "Invited a new user",
      organization: "InnovateX",
      date: "02 Nov 2026",
      icon: <UserPlus size={20} />,
      status: "Invited"
    },
    {
      id: 3,
      user: "Priya Singh",
      action: "Created a new resource",
      organization: "CloudSync",
      date: "02 Nov 2026",
      icon: <ShieldCheck size={20} />,
      status: "Created"
    },
    {
      id: 4,
      user: "Arjun Kumar",
      action: "Suspended an organization",
      organization: "DevSphere",
      date: "01 Nov 2026",
      icon: <Ban size={20} />,
      status: "Suspended"
    }
  ]

  return (
    <div className='p-5'>
        <div>
          <h1 className='text-5xl font-bold text-black text-center'>Welcome back, Super Admin 👋</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
          <StatCard title="Total Organizations" value={20} />
          <StatCard title="Total Users" value={100} />
          <StatCard title="Active Organizations" value={10} />
          <StatCard title="Total Access Requests" value={200} />
        </div>
        <div className='mt-8'>
          <h2 className="text-2xl font-bold text-black mb-5">
            Recent Organizations
          </h2>
          <RecentOrganizationTable/>
        </div>
        <div className='flex flex-col  mt-20'>
          <h2 className="text-2xl  font-bold text-black mb-5">Access Request Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <StatCard title="Pending Requests" value={20} />
            <StatCard title="Approved Requests" value={100} />
            <StatCard title="Rejected Requests" value={10} />
          </div>
        </div>
        <RecentActivity activities={activities}/>
    </div>
  )
}

export default DashBoard