import React, { useState } from "react";
import styles from "@/styles/TransactionTab.module.css";
import { BsClockHistory } from "react-icons/bs";
import { MdFormatListBulleted, MdOutlineFilterList } from "react-icons/md";
import {
	FaAngleDown,
	FaAngleUp,
	FaRegCheckCircle,
	FaRegClock,
} from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import { TbProgress } from "react-icons/tb";
import { CiNoWaitingSign } from "react-icons/ci";

const transactionsData = [
	{
		Date: "11/09/24",
		Time: "13:45:59",
		Description: "Money Transfer",
		Amount: "Rp1,234,567",
		Status: "In Progress",
	},
	{
		Date: "11/09/24",
		Time: "13:44:58",
		Description: "Multi-Currency Ac...",
		Amount: "Rp112,345,678",
		Status: "In Progress",
	},
	{
		Date: "11/09/24",
		Time: "13:25:46",
		Description: "Debit Card",
		Amount: "Rp311,456,789",
		Status: "In Progress",
	},
	{
		Date: "11/09/24",
		Time: "13:26:46",
		Description: "Money Transfer",
		Amount: "Rp4,567,890",
		Status: "Completed",
	},
	{
		Date: "11/09/24",
		Time: "13:15:56",
		Description: "Money Transfer",
		Amount: "Rp514,678,901",
		Status: "Completed",
	},
	{
		Date: "10/09/24",
		Time: "13:15:56",
		Description: "Multi-Currency Ac...",
		Amount: "Rp61,789,012",
		Status: "Completed",
	},
	{
		Date: "10/09/24",
		Time: "13:15:56",
		Description: "Debit Card",
		Amount: "Rp71,890,123",
		Status: "Pending",
	},
	{
		Date: "10/09/24",
		Time: "13:15:56",
		Description: "Money Transfer",
		Amount: "Rp117,890,123",
		Status: "Pending",
	},
	{
		Date: "10/09/24",
		Time: "13:15:56",
		Description: "Money Transfer",
		Amount: "Rp3,456,789",
		Status: "Completed",
	},
	{
		Date: "10/09/24",
		Time: "13:15:56",
		Description: "Multi-Currency Ac...",
		Amount: "Rp5,678,901",
		Status: "In Progress",
	},
	{
		Date: "10/09/24",
		Time: "13:15:56",
		Description: "Debit Card",
		Amount: "Rp17,890,123",
		Status: "Pending",
	},
	{
		Date: "9/09/24",
		Time: "13:15:56",
		Description: "Currency Conversi...",
		Amount: "Rp2,345,678",
		Status: "Pending",
	},
	{
		Date: "9/09/24",
		Time: "13:15:56",
		Description: "Currency Conversi...",
		Amount: "Rp3,456,789",
		Status: "Cancelled",
	},
	{
		Date: "9/09/24",
		Time: "13:15:56",
		Description: "Multi-Currency Ac...",
		Amount: "Rp147,890,123",
		Status: "Completed",
	},
	{
		Date: "9/09/24",
		Time: "13:15:56",
		Description: "Money Transfer",
		Amount: "Rp5,678,901",
		Status: "In Progress",
	},
];

export default function TransactionHistory() {
	const [transactions, setTransactions] = useState(transactionsData);
	const [sortConfig, setSortConfig] = useState(null);

	const handleSort = (key) => {
		let direction = "asc";
		if (
			sortConfig &&
			sortConfig.key === key &&
			sortConfig.direction === "asc"
		) {
			direction = "desc";
		}
		setSortConfig({ key, direction });

		const sortedTransactions = [...transactions].sort((a, b) => {
			if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
			if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
			return 0;
		});

		setTransactions(sortedTransactions);
	};

	return (
		<div className={styles.transactionHistory}>
			<div className={styles.sectionHeader}>
				<div className={styles.sectionTitle}>
					{" "}
					<BsClockHistory className={styles.sectionIcon} />
					Transaction History
				</div>
				<div className={styles.headingBtnContainer}>
					<button className={styles.tableFilterButton}>
						<MdOutlineFilterList />
						Add filter
					</button>
					<button className={styles.tableFilterButton}>
						<MdFormatListBulleted />
						Group by
					</button>
				</div>
			</div>

			<table className={styles.table}>
				<thead>
					<tr>
						<th>
							<input type="checkbox" />
						</th>
						<th onClick={() => handleSort("Date")}>
							<p className={styles.tableHeader}>
								Date
								{sortConfig?.key === "Date" &&
									(sortConfig.direction === "asc" ? (
										<FaAngleUp />
									) : (
										<FaAngleDown />
									))}
							</p>
						</th>
						<th onClick={() => handleSort("Time")}>
							<p className={styles.tableHeader}>
								Time
								{sortConfig?.key === "Time" &&
									(sortConfig.direction === "asc" ? (
										<FaAngleUp />
									) : (
										<FaAngleDown />
									))}
							</p>
						</th>

						<th>Description</th>
						<th>
							<p className={styles.tableHeader}>
								Amount
								<RiExternalLinkLine />
							</p>
						</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction, index) => (
						<tr key={index}>
							<td>
								<input type="checkbox" />
							</td>
							<td className={styles.transactionDate}>
								{transaction.Date}
							</td>
							<td>{transaction.Time}</td>
							<td>{transaction.Description}</td>
							<td>{transaction.Amount}</td>
							{transaction.Status === "Completed" && (
								<td
									className={
										styles.transactionStatusCompleted
									}
								>
									<FaRegCheckCircle />
									<p>{transaction.Status}</p>
								</td>
							)}
							{transaction.Status === "In Progress" && (
								<td
									className={styles.transactionStatusProgress}
								>
									<TbProgress />
									<p>{transaction.Status}</p>
								</td>
							)}
							{transaction.Status === "Pending" && (
								<td className={styles.transactionStatusPending}>
									<FaRegClock />
									<p>{transaction.Status}</p>
								</td>
							)}
							{transaction.Status === "Cancelled" && (
								<td
									className={
										styles.transactionStatusCancelled
									}
								>
									<CiNoWaitingSign />
									<p>{transaction.Status}</p>
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
