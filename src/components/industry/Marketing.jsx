// HeadingSection.js
import React from "react";
import styles from "@/styles/Page.module.css";

export default function Marketing() {
	return (
		<div className={styles.headingSection}>
			<h1 className={styles.heading}>Marketing</h1>
			<p className={styles.subheading}>
				Marketing strategies to boost your brand visibility.
			</p>
			<div className={styles.whiteSection}>Loading ...</div>
		</div>
	);
}
