import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-4">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}