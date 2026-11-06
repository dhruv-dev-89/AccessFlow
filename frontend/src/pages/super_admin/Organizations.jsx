
import React, { useMemo, useState } from "react";
import { Building2,Users,CheckCircle2,Search,Plus,MoreHorizontal,Eye,Pencil,Ban,ChevronLeft,ChevronRight,ArrowUpDown,} from "lucide-react";
import AddOrganizationModal from "@/components/AddOrgnizationModel";
import { Navigate, useNavigate } from "react-router-dom";

const organizationsData = [
    {
        id: 1,
        name: "TechCorp",
        admin: "Rahul Sharma",
        email: "rahul@techcorp.com",
        members: 25,
        status: "Active",
        createdAt: "2026-11-01",
    },
    {
        id: 2,
        name: "InnovateX",
        admin: "Aman Verma",
        email: "aman@innovatex.com",
        members: 18,
        status: "Active",
        createdAt: "2026-10-30",
    },
    {
        id: 3,
        name: "CloudSync",
        admin: "Priya Singh",
        email: "priya@cloudsync.com",
        members: 12,
        status: "Inactive",
        createdAt: "2026-10-29",
    },
    {
        id: 4,
        name: "DevSphere",
        admin: "Arjun Kumar",
        email: "arjun@devsphere.com",
        members: 32,
        status: "Active",
        createdAt: "2026-10-27",
    },
    {
        id: 5,
        name: "NextGen Solutions",
        admin: "Rohit Gupta",
        email: "rohit@nextgen.com",
        members: 40,
        status: "Active",
        createdAt: "2026-10-25",
    },
    {
        id: 6,
        name: "PixelWorks",
        admin: "Neha Sharma",
        email: "neha@pixelworks.com",
        members: 15,
        status: "Inactive",
        createdAt: "2026-10-22",
    },
    {
        id: 7,
        name: "CodeCraft",
        admin: "Vikas Yadav",
        email: "vikas@codecraft.com",
        members: 28,
        status: "Active",
        createdAt: "2026-10-20",
    },
];

const Organizations = () => {
    const [organizations, setOrganizations] = useState(organizationsData);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [sortOrder, setSortOrder] = useState("newest");
    const [currentPage, setCurrentPage] = useState(1);
    const [openMenu, setOpenMenu] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const itemsPerPage = 5;
    const filteredOrganizations = useMemo(() => {
        let result = organizations.filter((org) => {
            const matchesSearch =
                org.name.toLowerCase().includes(search.toLowerCase()) ||
                org.admin.toLowerCase().includes(search.toLowerCase()) ||
                org.email.toLowerCase().includes(search.toLowerCase());

            const matchesStatus =
                statusFilter === "All" || org.status === statusFilter;

            return matchesSearch && matchesStatus;
        });

        result.sort((a, b) => {
            return sortOrder === "newest"
                ? new Date(b.createdAt) - new Date(a.createdAt)
                : new Date(a.createdAt) - new Date(b.createdAt);
        });

        return result;
    }, [organizations, search, statusFilter, sortOrder]);

    const totalPages = Math.ceil(
        filteredOrganizations.length / itemsPerPage
    );

    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentOrganizations = filteredOrganizations.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const toggleStatus = (id) => {
        setOrganizations((prev) =>
            prev.map((org) =>
                org.id === id
                    ? {
                        ...org,
                        status: org.status === "Active" ? "Inactive" : "Active",
                    }
                    : org
            )
        );

        setOpenMenu(null);
    };

    const formatDate = (date) => {
        return new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const activeCount = organizations.filter(
        (org) => org.status === "Active"
    ).length;

    const inactiveCount = organizations.filter(
        (org) => org.status === "Inactive"
    ).length;

    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-50 p-5 md:p-8">

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Organizations
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage and monitor all registered organizations.
                    </p>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition"
                >
                    <Plus size={19} />
                    Add Organization
                </button>

            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Total Organizations
                        </p>

                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Building2 size={21} />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-5">
                        {organizations.length}
                    </h2>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Active Organizations
                        </p>

                        <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                            <CheckCircle2 size={21} />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-5">
                        {activeCount}
                    </h2>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Inactive Organizations
                        </p>

                        <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                            <Users size={21} />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-5">
                        {inactiveCount}
                    </h2>
                </div>

            </div>

            {/* Organizations Table */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">

                {/* Search and Filters */}
                <div className="p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                    <div className="relative w-full lg:max-w-sm">
                        <Search
                            size={19}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search organizations..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                        />
                    </div>

                    <div className="flex flex-wrap gap-3">

                        <select
                            value={statusFilter}
                            onChange={(e) => {
                                setStatusFilter(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="px-4 py-3 border border-gray-200 rounded-xl outline-none text-sm text-gray-600"
                        >
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>

                        <button
                            onClick={() =>
                                setSortOrder((prev) =>
                                    prev === "newest" ? "oldest" : "newest"
                                )
                            }
                            className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50"
                        >
                            <ArrowUpDown size={16} />
                            {sortOrder === "newest" ? "Newest First" : "Oldest First"}
                        </button>

                    </div>

                </div>

                {/* Table */}
                <div className="overflow-x-auto">

                    <table className="w-full text-left">

                        <thead className="bg-gray-50 border-y border-gray-200">
                            <tr className="text-sm text-gray-600">

                                <th className="px-6 py-4 font-semibold">
                                    Organization
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Admin
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Members
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Status
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Created At
                                </th>

                                <th className="px-6 py-4 font-semibold text-center">
                                    Actions
                                </th>

                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">

                            {currentOrganizations.map((org) => (

                                <tr
                                    key={org.id}
                                    className="hover:bg-gray-50 transition"
                                >

                                    <td className="px-6 py-5">
                                        <div className="font-semibold text-gray-900">
                                            {org.name}
                                        </div>
                                        <div className="text-xs text-gray-400 mt-1">
                                            ID: #{org.id}
                                        </div>
                                    </td>

                                    <td className="px-6 py-5">
                                        <div className="text-sm font-medium text-gray-800">
                                            {org.admin}
                                        </div>
                                        <div className="text-xs text-gray-400 mt-1">
                                            {org.email}
                                        </div>
                                    </td>

                                    <td className="px-6 py-5 text-sm text-gray-700">
                                        {org.members}
                                    </td>

                                    <td className="px-6 py-5">
                                        <span
                                            className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${org.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-orange-100 text-orange-700"
                                                }`}
                                        >
                                            {org.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5 text-sm text-gray-600 whitespace-nowrap">
                                        {formatDate(org.createdAt)}
                                    </td>

                                    <td className="px-6 py-5 text-center relative">

                                        <button
                                            onClick={() =>
                                                setOpenMenu(openMenu === org.id ? null : org.id)
                                            }
                                            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"
                                        >
                                            <MoreHorizontal size={20} />
                                        </button>

                                        {openMenu === org.id && (
                                            <div className="absolute right-10 top-14 z-20 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-2 text-left">

                                                <button
                                                    onClick={() => navigate(`/organizations/${org.id}`)}
                                                    className="flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-gray-50"
                                                    >
                                                    <Eye size={16} />
                                                    View Details
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        alert(`Edit ${org.name}`);
                                                        setOpenMenu(null);
                                                    }}
                                                    className="flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-gray-50"
                                                >
                                                    <Pencil size={16} />
                                                    Edit Organization
                                                </button>

                                                <button
                                                    onClick={() => toggleStatus(org.id)}
                                                    className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                                >
                                                    <Ban size={16} />
                                                    {org.status === "Active" ? "Suspend" : "Activate"}
                                                </button>

                                            </div>
                                        )}

                                    </td>

                                </tr>

                            ))}

                            {currentOrganizations.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center py-12 text-gray-500"
                                    >
                                        No organizations found.
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 border-t border-gray-200">

                    <p className="text-sm text-gray-500">
                        Showing{" "}
                        {filteredOrganizations.length === 0 ? 0 : startIndex + 1}
                        {" - "}
                        {Math.min(
                            startIndex + itemsPerPage,
                            filteredOrganizations.length
                        )}{" "}
                        of {filteredOrganizations.length} organizations
                    </p>

                    <div className="flex items-center gap-2">

                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                            className="p-2 border border-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-50"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <span className="px-4 py-2 text-sm font-medium">
                            {currentPage} / {Math.max(totalPages, 1)}
                        </span>

                        <button
                            disabled={currentPage >= totalPages || totalPages === 0}
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            className="p-2 border border-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-50"
                        >
                            <ChevronRight size={18} />
                        </button>

                    </div>

                </div>

            </div>
            <AddOrganizationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

        </div>
    );
};

export default Organizations;
