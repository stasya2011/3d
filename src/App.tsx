import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home, About, Contact, Projects } from "./pages";
import Navigate from "./components/Navigate";

function App() {
  return (
    <Router>
      <Navigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
