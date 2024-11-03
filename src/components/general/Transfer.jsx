import React from "react";
import styles from "@/styles/Page.module.css";

export default function Transfer() {
	return (
		<div className={styles.headingSection}>
			<h1 className={styles.heading}>Transfer</h1>
			<p className={styles.subheading}>
				Easily send and receive money with just a few clicks.
			</p>
			<div className={styles.whiteSection}>Loading ...</div>
		</div>
	);
}
