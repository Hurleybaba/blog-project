import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
