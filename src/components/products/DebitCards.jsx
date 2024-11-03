// HeadingSection.js
import React from "react";
import styles from "@/styles/Page.module.css";

export default function DebitCards() {
	return (
		<div className={styles.headingSection}>
			<h1 className={styles.heading}>Debit Cards</h1>
			<p className={styles.subheading}>
				Access your funds directly with our debit cards.
			</p>
			<div className={styles.whiteSection}>Loading ...</div>
		</div>
	);
}
