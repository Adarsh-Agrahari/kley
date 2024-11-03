import React from "react";
import styles from "@/styles/Page.module.css";

export default function Overview() {
	return (
		<div className={styles.headingSection}>
			<h1 className={styles.heading}>Overview</h1>
			<p className={styles.subheading}>
				A snapshot of your overall account activity and metrics.
			</p>
			<div className={styles.whiteSection}>Loading ...</div>
		</div>
	);
}
