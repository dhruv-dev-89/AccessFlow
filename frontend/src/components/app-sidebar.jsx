"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon, TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon } from "lucide-react"
import { NavManage } from "./nav-manage"

// This is sample data.
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
        },
        {
            name: "Acme Corp.",
            logo: (
                <AudioLinesIcon
                />
            ),
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: (
                <TerminalIcon
                />
            ),
            plan: "Free",
        },
    ],
    main:[
        {
            name:"Users",
        },
        {
            name:"Organizations",
        }
    ],
    navMain: [
        {
            title: "GitHub",
            url: "#",
            icon: (
                <TerminalSquareIcon
                />
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

export function AppSidebar({
    ...props
}) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavManage title="Manage" items={data.main}/>
                <NavMain  items={data.navMain}/>
                <NavProjects title="Request Status" items={data.Requests}/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
