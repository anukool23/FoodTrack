import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About</li>
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
