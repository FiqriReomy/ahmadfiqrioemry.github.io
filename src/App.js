import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Portofilio from "./component/pages/Portofilio";
import Contact from "./component/pages/Contact";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <div class="relative bg-white dark:bg-[#0f172a]" id="main ">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portofilio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
