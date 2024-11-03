import React from "react";
import styles from "@/styles/Page.module.css";

export default function MyCards() {
	return (
		<div className={styles.headingSection}>
			<h1 className={styles.heading}>My Cards</h1>
			<p className={styles.subheading}>
				Manage and view your cards all in one place.
			</p>
			<div className={styles.whiteSection}>Loading ...</div>
		</div>
	);
}
