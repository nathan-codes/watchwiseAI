import { UploadPage } from "@/components/upload/upload-page"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Upload() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="gradient-bg">
        <UploadPage />
      </SidebarInset>
    </SidebarProvider>
  )
}
