import React from "react";
import styles from "@/styles/TransactionTab.module.css";
import { MdOutlineFilterList, MdFormatListBulleted } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import {
	FaAngleDown,
	FaCircleNotch,
	FaEyeSlash,
	FaRegAddressBook,
	FaRegCheckCircle,
} from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import { TbProgress } from "react-icons/tb";
import { CiNoWaitingSign } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { LuWalletCards } from "react-icons/lu";
import { IoIosArrowForward, IoMdAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoCashOutline, IoEyeOutline } from "react-icons/io5";

const transactions = [
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

export default function Transaction() {
	return (
		<>
			<div className={styles.categorySearchBar}>
				<div className={styles.filter}>
					<MdOutlineFilterList className={styles.filterIcon} />
					<select className={styles.categorySelect}>
						<option value="all">All categories</option>
						<option value="money-transfer">Money Transfer</option>
						<option value="debit-card">Debit Card</option>
						<option value="multi-currency">
							Multi-Currency Account
						</option>
						<option value="currency-conversion">
							Currency Conversion
						</option>
					</select>
				</div>

				<input
					type="text"
					className={styles.searchInput}
					placeholder="Search"
				/>
				<CiSearch className={styles.searchIcon} />
			</div>

			<div className={styles.container}>
				<div className={styles.leftSide}>
					<div className={styles.cardSection}>
						<div className={styles.myCard}>
							<div className={styles.sectionHeader}>
								<div className={styles.sectionTitle}>
									{" "}
									<LuWalletCards
										className={styles.sectionIcon}
									/>
									My card
								</div>
								<div className={styles.headingBtnContainer}>
									<button
										className={styles.tableFilterButton}
									>
										<IoMdAdd />
										Add card
									</button>
								</div>
							</div>
							<div className={styles.card}>
								<img
									src="img/card.jpg"
									alt="Card Background"
									className={styles.cardImg}
								/>
								<div className={styles.cardDetails}>
									<p className={styles.cardName}>Kley Card</p>
									<p className={styles.cardNumber}>
										100-1244-1255-325
										<IoEyeOutline className={styles.cardEye}/>
									</p>
									<p className={styles.cardHolder}>
										Hidayatama Irsadanar
									</p>
									<div className={styles.cardInfo}>
										<p className={styles.expiration}>
											Exp 09/25
										</p>
										<p className={styles.cvc}>CVC 234</p>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.sectionHeader}>
							<div className={styles.sectionTitle}>
								{" "}
								<FaRegAddressBook
									className={styles.sectionIcon}
								/>
								<div className={styles.subTitle}>
									Billing Address
									<p>
										123 Main St, Apt 4B Springfield, IL
										62704
									</p>
								</div>
							</div>
							<div className={styles.headingBtnContainer}>
								<button className={styles.tableFilterButton}>
									<MdOutlineModeEdit />
									Edit
								</button>
							</div>
						</div>
						<div className={styles.speedingLimits}>
							<div className={styles.SlHeader}>
								<p>Speeding Limits</p>
							</div>
							<hr className={styles.hr} />
							<div className={styles.SlBody}>
								<div className={styles.slLeft}>
									<FaCircleNotch className={styles.slIcon1} />
									<div>
										<span>Per transactions</span>
										<p>Rp 100,000,00</p>
									</div>
								</div>
								<div className={styles.slRight}>
									<FaCircleNotch className={styles.slIcon2} />
									<div>
										<span>Withdraw cash</span>
										<p>Rp 15,000,00</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.accountSection}>
						<div className={styles.availableFunds}>
							<div className={styles.sectionHeader}>
								<div className={styles.sectionTitle}>
									{" "}
									<IoCashOutline
										className={styles.sectionIcon}
									/>
									Available funds
								</div>
								<div className={styles.headingBtnContainer}>
									<button
										className={styles.tableFilterButton}
									>
										Account Details
									</button>
								</div>
							</div>
							<div className={styles.funds}>
								<span>Rp 1,124,346.00</span>
								<p>
									• • • • • 325
									<FaEyeSlash
										className={styles.sectionIcon}
									/>
								</p>
							</div>
						</div>

						<hr className={styles.hr} />
						<div className={styles.recentTransfer}>
							<div className={styles.sectionHeader}>
								<div className={styles.sectionTitle}>
									{" "}
									<RiExternalLinkLine
										className={styles.sectionIcon}
									/>
									Recent Transfer
								</div>
								<div className={styles.headingBtnContainer}>
									<button
										className={styles.tableFilterButton}
									>
										See all
									</button>
								</div>
							</div>
						</div>
						<div className={styles.transferCards}>
							<div class={styles.transferCard}>
								<div class={styles.avatar}>CC</div>
								<div class={styles.transferDetails}>
									<div class={styles.usernameDate}>
										<span class={styles.username}>
											Cheyenne Calzoni
										</span>
										<span class={styles.date}>
											20 May 2024
										</span>
									</div>
								</div>
								<div class={styles.transferDetails}>
									<div class={styles.number}>-Rp120,000</div>
									<div class={styles.organization}>
										Wealth transfer
									</div>
								</div>
								<IoIosArrowForward />
							</div>
							<div class={styles.transferCard}>
								<div class={styles.avatar}>JC</div>
								<div class={styles.transferDetails}>
									<div class={styles.usernameDate}>
										<span class={styles.username}>
											Jocelyn Curtis
										</span>
										<span class={styles.date}>
											20 May 2024
										</span>
									</div>
								</div>
								<div class={styles.transferDetails}>
									<div class={styles.number}>-Rp20,000</div>
									<div class={styles.organization}>
										Investment
									</div>
								</div>
								<IoIosArrowForward />
							</div>
							<div class={styles.transferCard}>
								<div class={styles.avatar}>JC</div>
								<div class={styles.transferDetails}>
									<div class={styles.usernameDate}>
										<span class={styles.username}>
											Tatiana Passaguindici Arcand
										</span>
										<span class={styles.date}>
											20 May 2024
										</span>
									</div>
								</div>
								<div class={styles.transferDetails}>
									<div class={styles.number}>-Rp110,000</div>
									<div class={styles.organization}>
										Investment
									</div>
								</div>
								<IoIosArrowForward />
							</div>
						</div>
					</div>
				</div>

				{/* Transaction History */}
				<div className={styles.mainContent}>
					<div className={styles.transactionHistory}>
						<div className={styles.sectionHeader}>
							<div className={styles.sectionTitle}>
								{" "}
								<BsClockHistory
									className={styles.sectionIcon}
								/>
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
									<th>
										<p className={styles.tableHeader}>
											Date
											<FaAngleDown />
										</p>
									</th>
									<th>
										<p className={styles.tableHeader}>
											Time
											<FaAngleDown />
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
										<td className={styles.transactionDate}>{transaction.Date}</td>
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
										{transaction.Status ===
											"In Progress" && (
											<td
												className={
													styles.transactionStatusProgress
												}
											>
												<TbProgress />
												<p>{transaction.Status}</p>
											</td>
										)}
										{transaction.Status === "Pending" && (
											<td
												className={
													styles.transactionStatusPending
												}
											>
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
				</div>
			</div>
		</>
	);
}
