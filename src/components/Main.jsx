import React, { useState } from "react";
import Header from "./header";
import Home from "./Home";
import About from "./About";
import Blogs from "./Blogs";
import Footer from "./Footer";
import LoginSignup from "./LoginSignup";

function Main() {
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

export default Main;
