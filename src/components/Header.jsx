import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            setLogin(!login);
          }}>{login ? "Logout" : "Login"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
