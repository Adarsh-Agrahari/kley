// HeadingSection.js
import React, { useState } from "react";
import styles from "@/styles/Transactions.module.css";
import { RiExternalLinkLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import Transaction from "@/components/general/tabs/Transaction";

export default function Transactions() {
	const [activeTab, setActiveTab] = useState(0);

	const tabs = [
		"Overview",
		"Transactions",
		"Cards",
		"Recurring transactions",
	];
	return (
		<div className={styles.headingSection}>
			<div className={styles.headingContainer}>
				<div>
					<h1 className={styles.heading}>Transactions</h1>
					<p className={styles.subheading}>
						Review and manage all your money transfers in one place.
					</p>
				</div>
				<div className={styles.headingBtnContainer}>
					<button className={styles.headingBtn1}>
						<RiExternalLinkLine />
						Request Money
					</button>
					<button className={styles.headingBtn2}>
						<CiCirclePlus />
						Add Funds
					</button>
				</div>
			</div>

			{/* Tabs Component */}
			<div className={styles.tabsComponent}>
				{/* Tabs */}
				<div className={styles.tabs}>
					{tabs.map((tab, index) => (
						<div
							key={index}
							className={`${styles.tab} ${
								activeTab === index ? styles.activeTab : ""
							}`}
							onClick={() => setActiveTab(index)}
						>
							{tab}
						</div>
					))}
				</div>

				{/* Content Area */}
			</div>
			<div className={styles.content}>
				{activeTab === 0 && <div>Overview Content</div>}
				{activeTab === 1 && <Transaction />}
				{activeTab === 2 && <div>Cards Content</div>}
				{activeTab === 3 && <div>Settings Content</div>}
			</div>
		</div>
	);
}
