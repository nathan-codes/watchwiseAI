import { SettingsPage } from "@/components/settings/settings-page"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Settings() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="gradient-bg">
        <SettingsPage />
      </SidebarInset>
    </SidebarProvider>
  )
}
