import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import "../styles/Welcome.css";


const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="inputElement whiteGlassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="welcomeMainContainer">
      <div className="welcomeInnerMain">
        <div className="connectWalletContainer">
          <h1 className="connectWalletHeading textGradient">
            Send Crypto <br /> across the world
          </h1>
          <p className="connectWalletDescription">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="connectWalletButton"
            >
              <FaWallet className="faWallet" />
              <p className="connectWalletButtonText">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="technologiesContainer">
            <div className="firstTechnology companyCommonStyles">
              Reliability
            </div>
            <div className="companyCommonStyles">Security</div>
            <div className="secondTechnology companyCommonStyles">
              Ethereum
            </div>
            <div className="thirdTechnology companyCommonStyles">
              Web 3.0
            </div>
            <div className="companyCommonStyles">Low Fees</div>
            <div className="fourthTechnology companyCommonStyles">
              Blockchain
            </div>
          </div>
        </div>

        <div className="addressCardMain">
          <div className="addressCard whiteGlassmorphism ethCard">
            <div className="addressCardInner">
              <div className="addressCardIconsContainer">
                <div className="addressCardEthIcon">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="addressCardPublicAddress">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="addressCardEthereum">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="transactionFormContainer blueGlassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="welcomeDivider" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="sendTransactionButton"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
