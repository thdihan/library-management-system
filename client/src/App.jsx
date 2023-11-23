import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Layout from "./Components/Layout";
import AddBooks from "./Components/AddBooks";
import UserList from "./Components/UserList";
import { AuthContextProvider } from "./Context/AuthContext";
import BorrowedBooks from "./Components/BorrowedBooks";
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/*" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="add-books" element={<AddBooks />} />
            <Route path="user-list" element={<UserList />} />
            <Route path="borrowed-books" element={<BorrowedBooks />} />
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
