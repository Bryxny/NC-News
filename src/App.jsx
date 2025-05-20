import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Articles from "./pages/Articles";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes className="content">
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/users/:username" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
