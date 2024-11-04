import React, { createContext, useState, useContext } from "react";

const SidebarContext = createContext();
export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(true);
	const toggleSidebar = () => setIsSideBarOpen((prev) => !prev);
	return (
		<SidebarContext.Provider value={{ isSideBarOpen, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	);
};
