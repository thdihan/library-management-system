import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Layout from "./Components/Layout";
import AddBooks from "./Components/AddBooks";
import UserList from "./Components/UserList";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/*" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="add-books" element={<AddBooks />} />
          <Route path="user-list" element={<UserList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
