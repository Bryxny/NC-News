import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Articles from "./pages/Articles";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <NavBar></NavBar>
      <Routes className="content">
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/users/:username" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
