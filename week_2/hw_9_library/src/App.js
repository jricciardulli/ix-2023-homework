import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import BookPage from "./components/book/BookPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
   <BrowserRouter>
    <Navbar user={user} />
    <Routes>
      <Route path="/" element={<BookPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
