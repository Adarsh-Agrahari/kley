import Head from "next/head";
import Overview from "@/components/general/Overview.jsx";
import Sidebar from "../components/Sidebar.jsx";
import styles from "../styles/Dashboard.module.css";
import { useState } from "react";

export default function Home() {
	const [currentTab, setCurrentTab] = useState({
		name: "Overview",
		component: <Overview />,
	});
	return (
		<>
			<Head>
				<title>kley.</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="img/logo.png" />
			</Head>
			<div className={styles.container}>
				<Sidebar
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				/>
				<div className={styles.mainContent}>{currentTab.component}</div>
			</div>
		</>
	);
}
