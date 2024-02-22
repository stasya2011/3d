import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home, About, Contact, Projects } from "./pages";
import Navigate from "./components/Navigate";

function App() {
  return (
    <main className="bg-slate-300/50 ">
      <Router>
        <Navigate />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
