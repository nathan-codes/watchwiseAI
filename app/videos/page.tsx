import { VideosPage } from "@/components/videos/videos-page"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Videos() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="gradient-bg">
        <VideosPage />
      </SidebarInset>
    </SidebarProvider>
  )
}
