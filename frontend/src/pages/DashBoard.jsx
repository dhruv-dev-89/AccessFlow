
import OrganizationGrowthChart from '@/components/OrganizationGrowthChart'
import RecentActivity from '@/components/RecentActivity'
import RecentOrganizationTable from '@/components/RecentOrganizationTable'
import StatCard from '@/components/StatCard'
import { Ban, Building2, Database, ShieldCheck, UserPlus } from 'lucide-react'
import React from 'react'


const DashBoard = () => {

  const activities = [
  {
    id: 1,
    title: "New Organization Created",
    description: "Rahul Sharma created TechCorp organization.",
    time: "10 minutes ago",
    icon: Building2,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "New User Invited",
    description: "Aman Verma invited a new user to InnovateX.",
    time: "30 minutes ago",
    icon: UserPlus,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "New Resource Added",
    description: "Priya Singh added CloudSync resource.",
    time: "1 hour ago",
    icon: Database,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Organization Suspended",
    description: "Arjun Kumar suspended DevSphere organization.",
    time: "3 hours ago",
    icon: Ban,
    color: "bg-red-100 text-red-600",
  },
  ];

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
          <div className='flex flex-col gap-5'>
            <RecentOrganizationTable/>
            <OrganizationGrowthChart/>
          </div>
        </div>
        <div className='flex flex-col  mt-20'>
          <h2 className="text-2xl  font-bold text-black mb-5">Access Request Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <StatCard title="Pending Requests" value={20} />
            <StatCard title="Approved Requests" value={100} />
            <StatCard title="Rejected Requests" value={10} />
          </div>
        </div>
        <div className='mt-5'>
          <RecentActivity activities={activities}/>
        </div>
        
    </div>
  )
}

export default DashBoard