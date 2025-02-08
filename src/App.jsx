import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import LoginSignup from "./components/LoginSignup";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
