import { Link } from "react-router-dom";
import classes from "../styles/Navbar.module.css";
export default function Navbar({ items }) {
  return (
    <nav className={`${classes["navbar-component"]}`}>
      <div className={`${classes["profile-area"]}`}>
        <h2>USERNAME</h2>
        <p>Usertype</p>
      </div>
      <ul>
        {items?.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
