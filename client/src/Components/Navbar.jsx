import { Link, useNavigate } from "react-router-dom";
import classes from "../styles/Navbar.module.css";
import { useAuthContext } from "../Hooks/useAuthContext";
import _ from "lodash";
export default function Navbar({ items }) {
  const navigate = useNavigate();
  const { logout } = useAuthContext();
  function handleLogout() {
    logout();
    navigate("/signin");
  }
  const { user } = useAuthContext();
  return (
    <nav className={`${classes["navbar-component"]}`}>
      <div className={`${classes["profile-area"]}`}>
        <h2>{_.upperCase(user?.username.split("@")[0])}</h2>
        <p>{_.capitalize(user?.type)}</p>
        <p onClick={handleLogout}>Logout</p>
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
