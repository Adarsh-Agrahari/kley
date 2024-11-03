import React from "react";
import styles from "@/styles/Page.module.css";

export default function Exchange() {
	return (
		<div className={styles.headingSection}>
			<h1 className={styles.heading}>Exchange</h1>
			<p className={styles.subheading}>
				Convert currencies with real-time exchange rates.
			</p>
			<div className={styles.whiteSection}>Loading ...</div>
		</div>
	);
}
