import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export default function Layout() {
  const navItems = [
    { name: "All Books", link: "/" },
    { name: "Add Books", link: "/add-books" },
    { name: "User List", link: "/user-list" },
  ];
  return (
    <div className={`main-layout`}>
      <Navbar items={navItems} />
      <Outlet />
    </div>
  );
}
