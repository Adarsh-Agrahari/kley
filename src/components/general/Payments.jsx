import React from "react";
import styles from "@/styles/Page.module.css";

export default function Payments() {
	return (
		<div className={styles.headingSection}>
			<h1 className={styles.heading}>Payments</h1>
			<p className={styles.subheading}>
				Quickly make payments and track your payment history.
			</p>
			<div className={styles.whiteSection}>Loading ...</div>
		</div>
	);
}
