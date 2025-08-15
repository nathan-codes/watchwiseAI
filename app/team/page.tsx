import { TeamPage } from "@/components/team/team-page"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Team() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="gradient-bg">
        <TeamPage />
      </SidebarInset>
    </SidebarProvider>
  )
}
