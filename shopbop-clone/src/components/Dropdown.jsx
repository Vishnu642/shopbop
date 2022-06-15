import "./Dropdown.css";
import { useState } from "react";


export const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return(
    <div  className={dropdown ? "dropdown_clicked" : "dropdown"}
    onClick={() => {
      setDropdown(!dropdown);
    }} >
      <p>Account</p>
      <p>Orders</p>
      <p>My Loyalty</p>
      <p>My Reviews</p>
      <p>My Hearts</p>
      <p>My Wish List</p>
      <p>My Designers</p>
    </div>
  )
}