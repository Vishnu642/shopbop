import "./Dropdown.css";
import { useState } from "react";
import { Link } from "react-router-dom";


export const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return(
    <div  className={dropdown ? "dropdown_clicked" : "dropdown"}
    onClick={() => {
      setDropdown(!dropdown);
    }} >
      <Link to="/signup" ><p className="account" >Account</p></Link>
      <p>Orders</p>
      <p>My Loyalty</p>
      <p>My Reviews</p>
      <p>My Hearts</p>
      <p>My Wish List</p>
      <p>My Designers</p>
    </div>
  )
}