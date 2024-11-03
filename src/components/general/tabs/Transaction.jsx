import React from "react";
import styles from "@/styles/TransactionTab.module.css";
import { MdOutlineFilterList } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaCircleNotch, FaEyeSlash, FaRegAddressBook } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import TransactionHistory from "./TransactionHistory";
import BankCard from "./BankCard";

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
						<BankCard />

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
								<div class={styles.datas}>
									<div class={styles.transferDetails}>
										<div class={styles.number}>
											-Rp120,000
										</div>
										<div class={styles.organization}>
											Wealth transfer
										</div>
									</div>
									<IoIosArrowForward />
								</div>
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
								<div class={styles.datas}>
									<div class={styles.transferDetails}>
										<div class={styles.number}>
											-Rp20,000
										</div>
										<div class={styles.organization}>
											Investment
										</div>
									</div>
									<IoIosArrowForward />
								</div>
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
								<div class={styles.datas}>
									<div class={styles.transferDetails}>
										<div class={styles.number}>
											-Rp110,000
										</div>
										<div class={styles.organization}>
											Investment
										</div>
									</div>
									<IoIosArrowForward />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Transaction History */}
				<div className={styles.mainContent}>
					<TransactionHistory />
				</div>
			</div>
		</>
	);
}
