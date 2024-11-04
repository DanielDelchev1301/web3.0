import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/web3applogo.png";
import "../styles/Navbar.css";

const NavBarItem = ({ title, classprops }) => (
  <li className={`navigationItemText ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="navigationMainContainer">
      <div className="navigationLogoContainer">
        <img src={logo} alt="logo" className="logoImage" />
      </div>
      <ul className="navigationItemsContainer">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="navigationLoginButton">
          Login
        </li>
      </ul>
      <div className="navigationFlexMenu">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="navigationToggleButton" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="navigationToggleButton" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="navigationItemsContainnerToggle blueGlassmorphism">
            <li className="navigationCloseButton"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="additionalStyle" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
