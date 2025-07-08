import { SidebarProvider, SidebarTrigger, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function CabinetLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<SidebarProvider>
			<Sidebar variant="inset" />
			<SidebarInset>
        <SidebarTrigger/>
          <AppSidebar />
				<main>{children}</main>
        
			</SidebarInset>
		</SidebarProvider>
	);
}
