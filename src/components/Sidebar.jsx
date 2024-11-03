import { useEffect, useState } from "react";
import styles from "../styles/Dashboard.module.css";
import { FaCreditCard, FaExchangeAlt, FaHandHoldingUsd } from "react-icons/fa";
import { LuChevronsUpDown, LuWalletCards } from "react-icons/lu";
import { AiOutlineDollar } from "react-icons/ai";
import { FiSidebar } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { BsWindowSidebar } from "react-icons/bs";
import { PiWarehouse } from "react-icons/pi";
import { HiSpeakerphone } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";
import ProCard from "../components/ProCard.jsx";
import Payments from "./general/Payments";
import DebitCards from "./products/DebitCards";
import ForeignExchange from "./products/ForeignExchange";
import MultiCurrencyAccount from "./products/MultiCurrencyAccount";
import Manufacturing from "./industry/Manufacturing";
import Marketing from "./industry/Marketing";
import ExportImport from "./industry/ExportImport";
import Transactions from "./general/Transactions";
import Exchange from "./general/Exchange";
import MyCards from "./general/MyCards";
import Transfer from "./general/Transfer";
import Overview from "./general/Overview";
import { IoMdMenu } from "react-icons/io";

const user = {
	name: "Hidayatma Isradana",
	org: "Tokomedia",
};

const menu = {
	General: [
		{
			name: "Overview",
			icon: <BsWindowSidebar />,
			component: <Overview />,
		},
		{
			name: "My cards",
			icon: <LuWalletCards />,
			component: <MyCards />,
		},
		{
			name: "Transfer",
			icon: <FaExchangeAlt />,
			component: <Transfer />,
		},
		{
			name: "Transactions",
			icon: <GrNotes />,
			component: <Transactions />,
		},
		{
			name: "Payments",
			icon: <FaHandHoldingUsd />,
			component: <Payments />,
		},
		{
			name: "Exchange",
			icon: <AiOutlineDollar />,
			component: <Exchange />,
		},
	],
	Industry: [
		{
			name: "Manufacturing",
			icon: <PiWarehouse />,
			component: <Manufacturing />,
		},
		{
			name: "Marketing",
			icon: <HiSpeakerphone />,
			component: <Marketing />,
		},
		{
			name: "Export/Import",
			icon: <LuChevronsUpDown />,
			component: <ExportImport />,
		},
	],
	Products: [
		{
			name: "Debit cards",
			icon: <FaCreditCard />,
			component: <DebitCards />,
		},
		{
			name: "Foreign exchange",
			icon: <AiOutlineDollar />,
			component: <ForeignExchange />,
		},
		{
			name: "Multi currency account",
			icon: <GoPeople />,
			component: <MultiCurrencyAccount />,
		},
	],
};

export default function Sidebar({ currentTab, setCurrentTab }) {
	const [isOpen, setIsOpen] = useState(true);

	const breakpoint = 1024;

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < breakpoint) {
				setIsOpen(false);
			}  
		};
		handleResize();
	}, [breakpoint, currentTab]);

	return (
		<>
			<button className={styles.toggleIconBtn} onClick={toggleSidebar}>
				<IoMdMenu className={styles.toggleIcon} />
			</button>
			<div
				className={`${styles.sidebar} ${
					isOpen ? styles.open : styles.closed
				}`}
			>
				<div className={styles.sidebarHeader}>
					<div className={styles.sidebarLogoContainer}>
						<img
							src="img/logo.png"
							className={styles.profileImage}
						></img>
						{isOpen && (
							<div className={styles.sidebarLogoText}>kley.</div>
						)}
					</div>

					{isOpen && (
						<button onClick={toggleSidebar}>
							<FiSidebar />
						</button>
					)}
				</div>
				{!isOpen && (
					<button
						onClick={toggleSidebar}
						className={styles.sidebarToggleBtn}
					>
						<FiSidebar />
					</button>
				)}
				<hr className={styles.divider} />

				{/* Profile Section */}
				<div className={styles.profileSection}>
					<img
						src="img/profile.png"
						alt="Profile"
						className={styles.profileImage}
					/>
					{isOpen && (
						<>
							<div className={styles.profileInfo}>
								<p className={styles.profileName}>
									{user.name}
								</p>
								<p className={styles.profileOrg}>{user.org}</p>
							</div>
							<button className={styles.switchProfileBtn}>
								<LuChevronsUpDown />
							</button>
						</>
					)}
				</div>
				{isOpen && <hr className={styles.divider} />}

				{/* Menu Section */}
				<div className={styles.menuSection}>
					<div className={styles.sidebarMenu}>
						{Object.keys(menu).map((category) => (
							<div key={category} className={styles.menuItems}>
								{isOpen ? (
									<p className={styles.menuTitle}>
										{category}
									</p>
								) : (
									<div className={styles.divider} />
								)}

								<ul>
									{menu[category].map((item) => (
										<li key={item.content}>
											<button
												className={`${
													currentTab.name ===
													item.name
														? styles.menuButtonActive
														: ""
												} ${styles.menuButton}`}
												onClick={() => {
													setCurrentTab(item);
												}}
											>
												<div
													className={`${
														currentTab.name ===
														item.name
															? styles.activeIcon
															: ""
													} ${styles.icon}`}
												>
													{item.icon}
												</div>
												{isOpen && item.name}
											</button>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className={styles.sidebarMenu}>
						<button className={styles.menuButton}>
							<div className={styles.icon}>
								<IoSettingsOutline />
							</div>
							{isOpen && "Settings"}
						</button>
						<button className={styles.menuButton}>
							<div className={styles.icon}>
								<MdOutlineHelpOutline />
							</div>
							{isOpen && "Help Center"}
						</button>
						{isOpen && <ProCard />}
					</div>
				</div>
			</div>
		</>
	);
}
