// Navbar.js
import styles from "../styles/Dashboard.module.css";
import { AiFillUpCircle } from "react-icons/ai";

export default function Navbar() {
	return (
		<div className={styles.proCard}>
			<div className={styles.icon}>
				<AiFillUpCircle />
			</div>
			<div>
				Get full access
				<p>Experience Full Financial Insights</p>
				<button>Request here {">"}</button>
			</div>
		</div>
	);
}
