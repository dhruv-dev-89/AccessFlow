"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon, TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon, Building2Icon, UsersIcon, Divide } from "lucide-react"
import { NavManage } from "./nav-manage"

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Access Flow",
            logo: (
                <GalleryVerticalEndIcon
                />
            ),
            plan: "Enterprise",
        }
    ],
    main: [
        {
            name: "Users",
        },
        {
            name: "Organizations",
        }
    ],
    navMain: [
        {
            title: "GitHub",
            url: "#",
            icon: (
                <img className="h-5 w-5" src="/images/github.png" alt="" srcset="" />
            ),
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        }
    ],
    Requests: [
        {
            name: "Access Requests",
            url: "#",
            icon: (
                <FrameIcon
                />
            ),
        },
        {
            name: "Access Grants",
            url: "#",
            icon: (
                <PieChartIcon
                />
            ),
        },
        {
            name: "Approved",
            url: "#",
            icon: (
                <MapIcon
                />
            ),
        },
    ],
}

const navByRole = {
    super_admin: [
        {
            title: "Overview",
            items: [
                { name: "Dashboard", url: "/dashboard", icon: <PieChartIcon /> },
            ],
        },
        {
            title: "Management",
            items: [
                { name: "Organizations", url: "/organizations", icon: <Building2Icon /> },
                { name: "All Users", url: "/users", icon: <UsersIcon /> },
            ],
        },
        {
            title: "Monitoring",
            items: [
                { name: "Audit Logs", url: "/audit-logs", icon: <FrameIcon /> },
            ],
        },
    ],

    org_admin: [
        {
            title: "Overview",
            items: [
                { name: "Dashboard", url: "/dashboard", icon: <PieChartIcon /> },
            ],
        },
        {
            title: "Management",
            items: [
                { name: "Members", url: "/org/members", icon: <UsersIcon /> },
                { name: "Resources", url: "/org/resources", icon: <Building2Icon /> },
                { name: "Approvers", url: "/org/approvers", icon: <UsersIcon /> },
            ],
        },
        {
            title: "Access Management",
            items: [
                { name: "Access Requests", url: "/access-requests", icon: <FrameIcon /> },
                { name: "Access Grants", url: "/access-grants", icon: <PieChartIcon /> },
            ],
        },
    ],

    approver: [
        {
            title: "Overview",
            items: [
                { name: "Dashboard", url: "/dashboard", icon: <PieChartIcon /> },
            ],
        },
        {
            title: "Approvals",
            items: [
                { name: "Pending Approvals", url: "/approvals/pending", icon: <FrameIcon /> },
                { name: "Approval History", url: "/approvals/history", icon: <PieChartIcon /> },
            ],
        },
    ],

    member: [
        {
            title: "Overview",
            items: [
                { name: "Dashboard", url: "/dashboard", icon: <PieChartIcon /> },
            ],
        },
        {
            title: "My Access",
            items: [
                { name: "Available Resources", url: "/resources", icon: <Building2Icon /> },
                { name: "My Requests", url: "/my-requests", icon: <FrameIcon /> },
                { name: "My Grants", url: "/my-grants", icon: <PieChartIcon /> },
            ],
        },
    ],
};


export function AppSidebar({ ...props }) {
    const role = "super_admin"
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <h2 className="flex items-center gap-2">
                <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-semibold"
                    style={{
                    backgroundColor: "#111827",
                    color: "#ffffff",
                    boxShadow: "0 5px 18px rgba(15, 23, 42, 0.14)",
                    }}
                >
                    A
                </div>
                Access Flow
                </h2>            
            </SidebarHeader>
            <SidebarContent>
                {navByRole[role].map((group) => (
                    <NavManage
                        key={group.title}
                        title={group.title}
                        items={group.items}
                    />
                ))}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
