import { dividerClasses } from "@mui/material";
import logo from "../../assests/logo.png";
import styles from "./Logo.module.css";
import { useNavigate } from "react-router-dom";

const Logo = () => {
   
  const navigate = useNavigate();
  return (
    <div className="logo"> <img
    onClick={() => navigate("/")}
    src={logo}
    alt="logo"
  /></div>
    
  );
};

export default Logo;
