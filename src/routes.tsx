import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Index";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}