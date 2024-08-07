import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/UserContext";
import Main from "./pages/Main";

function App() {
  const { accessToken, saveAccessToken } = useAuth();

  const urlSplited = new URLSearchParams(window.location.hash.slice(1));
  const urlAccessToken = urlSplited.get("access_token");
  if (urlAccessToken) {
    saveAccessToken(urlAccessToken);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={accessToken ? <Main /> : <Home />} />
      </Routes>
    </Router>
  );
}

export default App;
