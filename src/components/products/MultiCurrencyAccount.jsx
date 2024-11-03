// HeadingSection.js
import React from "react";
import styles from "@/styles/Page.module.css";

export default function MultiCurrencyAccount() {
	return (
		<div className={styles.headingSection}>
			<h1 className={styles.heading}>Multi currency account</h1>
			<p className={styles.subheading}>
				Manage multiple currencies within a single account.
			</p>
			<div className={styles.whiteSection}>Loading ...</div>
		</div>
	);
}
