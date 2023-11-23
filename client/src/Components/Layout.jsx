import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuthContext } from "../Hooks/useAuthContext";
export default function Layout() {
  const { user } = useAuthContext();
  const librarianNav = [
    { name: "All Books", link: "/" },
    { name: "Add Books", link: "/add-books" },
    { name: "User List", link: "/user-list" },
  ];
  const otherNav = [
    { name: "All Books", link: "/" },
    { name: "Borrowed Books", link: "/borrowed-books" },
    { name: "Borrowed History", link: "/borrowed-history" },
  ];
  return (
    <div className={`main-layout`}>
      <Navbar items={user.type === "librarian" ? librarianNav : otherNav} />
      <Outlet />
    </div>
  );
}
