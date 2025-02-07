import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Home />
      <About />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
