// HeadingSection.js
import React from "react";
import styles from "@/styles/Page.module.css";

export default function ForeignExchange() {
	return (
		<div className={styles.headingSection}>
			<h1 className={styles.heading}>Foreign exchange</h1>
			<p className={styles.subheading}>
				Competitive rates for exchanging foreign currencies.
			</p>
			<div className={styles.whiteSection}>Loading ...</div>
		</div>
	);
}
