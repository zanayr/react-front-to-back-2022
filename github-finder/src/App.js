import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import NotFound from "./pages/404.js";
import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/404" element={ <NotFound /> } />
            <Route path="/*" element={ <NotFound /> } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
