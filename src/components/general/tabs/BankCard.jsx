import React, { useState } from "react";
import styles from "@/styles/TransactionTab.module.css";
import { LuWalletCards } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useSidebar } from "@/context/SidebarContext.js";

export default function Transaction() {
	const { isSideBarOpen } = useSidebar();
	const [isHidden, setIsHidden] = useState(false);
	const cardNumber = "100-1244-1255-325";

	const toggleVisibility = () => {
		setIsHidden(!isHidden);
	};

	return (
		<div className={styles.myCard}>
			<div className={styles.sectionHeader}>
				<div className={styles.sectionTitle}>
					{" "}
					<LuWalletCards className={styles.sectionIcon} />
					My card
				</div>
				<div className={styles.headingBtnContainer}>
					<button className={styles.tableFilterButton}>
						<IoMdAdd />
						Add card
					</button>
				</div>
			</div>
			<div className={styles.card}>
				<img
					src="img/card.jpg"
					alt="Card Background"
					className={styles.cardImg}
				/>
				<div className={styles.cardDetails}>
					<p className={styles.cardName}>Kley Card</p>
					<p
						className={
							(isSideBarOpen && window.innerWidth > 600)
								? styles.cardNumberOpen
								: styles.cardNumber
						}
					>
						{isHidden ? cardNumber.replace(/\d/g, "X") : cardNumber}
						{!isHidden && (
							<IoEyeOutline
								className={styles.cardEye}
								onClick={toggleVisibility}
							/>
						)}
						{isHidden && (
							<FaEyeSlash
								className={styles.cardEye}
								onClick={toggleVisibility}
							/>
						)}
					</p>
					<p className={styles.cardHolder}>Hidayatama Irsadanar</p>
					<div className={styles.cardInfo}>
						<p className={styles.expiration}>Exp 09/25</p>
						<p className={styles.cvc}>CVC 234</p>
					</div>
				</div>
			</div>
		</div>
	);
}
