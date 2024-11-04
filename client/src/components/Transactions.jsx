import React, { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import useFetch from "../hooks/useFetch";
import { shortenAddress } from "../utils/shortenAddress";
import "../styles/Transactions.css";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="transactionsCardMainContainer">
      <div className="transactionsCardInner">
        <div className="transactionsCardInfo">
          <div className="addressesLinks">
            <a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
              <p className="transactionsCardText">From: {shortenAddress(addressFrom)}</p>
            </a>
            <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
              <p className="transactionsCardText">To: {shortenAddress(addressTo)}</p>
            </a>
          </div>
          <div className="transactionDetails">
            <p className="transactionsCardText">Amount: {amount} ETH</p>
            {message && <p className="transactionsCardText">Message: {message}</p>}
          </div>
        </div>
        <img
          src={gifUrl || url}
          alt="nature"
          className="transactionsCardGif"
        />
        <div className="transactionsCardTimestampContainer">
          <p className="timestampText">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, setTransactions, currentAccount, transactionCount } = useContext(TransactionContext);

  useEffect(() => {
    setTransactions([...transactions]);
  }, [transactionCount]);

  return (
    <div className="transactionsMainContainer gradientBgTransactions">
      <div className="transactionsInner">
        {currentAccount ? (
          <h3 className="latestTransactions">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="latestTransactions">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="transactionsContainerForCards">
          {[...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
