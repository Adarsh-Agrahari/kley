import "@/styles/globals.css";
import { SidebarProvider } from "@/context/SidebarContext.js";

export default function App({ Component, pageProps }) {
	return (
		<SidebarProvider>
			<Component {...pageProps} />
		</SidebarProvider>
	);
}
