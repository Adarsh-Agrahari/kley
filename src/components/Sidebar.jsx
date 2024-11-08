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
import { useSidebar } from "@/context/SidebarContext.js";

const users = [
	{ img: "img/profile.png", name: "Hidayatama Irsadanar", org: "Tokomedia" },
	{ img: "img/profile2.png", name: "Nachtwan Pranderer", org: "Globalis" },
	{
		img: "img/profile3.png",
		name: "FleurDeLune KaraSu",
		org: "Fjord Viking",
	},
];

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
	const [user, setUser] = useState(users[0]);
	const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
	const { isSideBarOpen, toggleSidebar } = useSidebar();

	const breakpoint = 1024;

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < breakpoint) {
				toggleSidebar();
			}
		};
		handleResize();
	}, [breakpoint, currentTab]);

	const handleUserChange = (user) => {
		setUser(user);
		setIsOpenUserMenu((prev) => !prev);
	};

	return (
		<>
			<button className={styles.toggleIconBtn} onClick={toggleSidebar}>
				<IoMdMenu className={styles.toggleIcon} />
			</button>
			<div
				className={`${styles.sidebar} ${
					isSideBarOpen ? styles.open : styles.closed
				}`}
			>
				<div className={styles.sidebarHeader}>
					<div className={styles.sidebarLogoContainer}>
						<img
							src="img/logo.png"
							className={styles.profileImage}
						></img>
						{isSideBarOpen && (
							<div className={styles.sidebarLogoText}>kley.</div>
						)}
					</div>

					{isSideBarOpen && (
						<button onClick={toggleSidebar}>
							<FiSidebar />
						</button>
					)}
				</div>
				{!isSideBarOpen && (
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
						src={user.img}
						alt="Profile"
						className={styles.profileImage}
					/>
					{isSideBarOpen && (
						<>
							<div className={styles.profileInfo}>
								<p className={styles.profileName}>
									{user.name}
								</p>
								<p className={styles.profileOrg}>{user.org}</p>
							</div>
							<button
								className={styles.switchProfileBtn}
								onClick={() =>
									setIsOpenUserMenu(!isOpenUserMenu)
								}
							>
								<LuChevronsUpDown />
							</button>
						</>
					)}
				</div>
				{isSideBarOpen && <hr className={styles.divider} />}

				{/* Menu Section */}
				<div className={styles.menuSection}>
					<div className={styles.sidebarMenu}>
						{Object.keys(menu).map((category) => (
							<div key={category} className={styles.menuItems}>
								{isSideBarOpen ? (
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
												{isSideBarOpen && item.name}
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
							{isSideBarOpen && "Settings"}
						</button>
						<button className={styles.menuButton}>
							<div className={styles.icon}>
								<MdOutlineHelpOutline />
							</div>
							{isSideBarOpen && "Help Center"}
						</button>
						{isSideBarOpen && <ProCard />}
					</div>
				</div>
				{isOpenUserMenu && (
					<div className={styles.switchProfile}>
						{users.map((user, index) => (
							<div
								key={index}
								className={styles.profileBtn}
								onClick={() => handleUserChange(users[index])}
							>
								<img
									src={user.img}
									alt="Profile"
									className={styles.profileImage}
								/>
								<>
									<div className={styles.profileInfo}>
										<p className={styles.profileName}>
											{user.name}
										</p>
										<p className={styles.profileOrg}>
											{user.org}
										</p>
									</div>
								</>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
}
