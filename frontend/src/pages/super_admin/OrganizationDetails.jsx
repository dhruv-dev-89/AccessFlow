import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {ArrowLeft, Building2, Users, Database, FileClock, Mail, CalendarDays, ShieldCheck, Clock, CheckCircle2, XCircle, MoreHorizontal,} from "lucide-react";

const organizationData = {
  1: {
    name: "TechCorp",
    email: "contact@techcorp.com",
    admin: "Rahul Sharma",
    adminEmail: "rahul@techcorp.com",
    members: 25,
    resources: 12,
    requests: 48,
    status: "Active",
    createdAt: "01 November 2026",
    description:
      "TechCorp is a technology organization focused on software development and digital solutions.",
  },
  2: {
    name: "InnovateX",
    email: "contact@innovatex.com",
    admin: "Aman Verma",
    adminEmail: "aman@innovatex.com",
    members: 18,
    resources: 8,
    requests: 32,
    status: "Active",
    createdAt: "30 October 2026",
    description:
      "InnovateX provides innovative technology and business solutions.",
  },
  3: {
    name: "CloudSync",
    email: "contact@cloudsync.com",
    admin: "Priya Singh",
    adminEmail: "priya@cloudsync.com",
    members: 12,
    resources: 6,
    requests: 20,
    status: "Inactive",
    createdAt: "29 October 2026",
    description:
      "CloudSync specializes in cloud-based applications and services.",
  },
};

const activities = [
  {
    id: 1,
    title: "New Member Added",
    description: "Rahul Sharma added a new member.",
    time: "10 minutes ago",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    title: "Resource Created",
    description: "A new resource was added to the organization.",
    time: "1 hour ago",
    icon: Database,
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: 3,
    title: "Access Request Approved",
    description: "An access request was approved.",
    time: "3 hours ago",
    icon: CheckCircle2,
    color: "bg-green-50 text-green-600",
  },
];

const OrganizationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const organization = organizationData[id];

  if (!organization) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900">
          Organization Not Found
        </h2>
        <button
          onClick={() => navigate("/organizations")}
          className="mt-4 text-blue-600 hover:underline"
        >
          Back to Organizations
        </button>
      </div>
    );
  }

  const stats = [
    {
      title: "Total Members",
      value: organization.members,
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Total Resources",
      value: organization.resources,
      icon: Database,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Access Requests",
      value: organization.requests,
      icon: FileClock,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-5 md:p-8">

      {/* Back Button */}
      <button
        onClick={() => navigate("/organizations")}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition"
      >
        <ArrowLeft size={18} />
        Back to Organizations
      </button>

      {/* Header */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Building2 size={32} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {organization.name}
              </h1>

              <p className="text-gray-500 text-sm mt-1">
                {organization.email}
              </p>

              <span
                className={`inline-flex mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
                  organization.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {organization.status}
              </span>
            </div>

          </div>

          <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition">
            Edit Organization
          </button>

        </div>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-7">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex justify-between items-center">

                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>

                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <Icon size={21} />
                </div>

              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-5">
                {stat.value}
              </h2>
            </div>
          );
        })}

      </div>

      {/* Organization Information + Admin */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-7">

        {/* Organization Information */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

          <h2 className="text-lg font-bold text-gray-900 mb-5">
            Organization Information
          </h2>

          <p className="text-sm text-gray-500 leading-7 mb-6">
            {organization.description}
          </p>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <Mail className="text-gray-400" size={19} />
              <div>
                <p className="text-xs text-gray-400">Organization Email</p>
                <p className="text-sm font-medium text-gray-800">
                  {organization.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="text-gray-400" size={19} />
              <div>
                <p className="text-xs text-gray-400">Created At</p>
                <p className="text-sm font-medium text-gray-800">
                  {organization.createdAt}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Admin Information */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

          <h2 className="text-lg font-bold text-gray-900 mb-5">
            Organization Admin
          </h2>

          <div className="flex items-center gap-4 mb-6">

            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold">
              {organization.admin.charAt(0)}
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                {organization.admin}
              </h3>
              <p className="text-sm text-gray-500">
                Organization Administrator
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-gray-400" size={19} />
            <div>
              <p className="text-xs text-gray-400">Admin Email</p>
              <p className="text-sm font-medium text-gray-800">
                {organization.adminEmail}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mt-7">

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Recent Organization Activity
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Latest activities within this organization.
            </p>
          </div>

          <button className="text-gray-400 hover:text-gray-700">
            <MoreHorizontal size={22} />
          </button>
        </div>

        <div className="space-y-6">

          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div key={activity.id} className="flex items-start gap-4">

                <div className={`p-3 rounded-xl ${activity.color}`}>
                  <Icon size={20} />
                </div>

                <div className="flex-1">
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

    </div>
  );
};

export default OrganizationDetails;
