import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState(false);
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  return (
    
    <div className="flex justify-between bg-pink-50 shadow-md mb-2">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ?  "🟢" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button className="login" onClick={()=>{
            setLogin(!login);
          }}>{login ? "Logout" : "Login"}</button>
          <li className="px-4 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
