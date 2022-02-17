import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { GitHubProvider } from "./context/github/GitHubContext.js";
import { AlertProvider } from "./context/alert/AlertContext.js";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import User from "./pages/User.js";
import NotFound from "./pages/404.js";
import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
import Alert from "./components/layout/Alert.js";

function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/user/:login" element={ <User /> } />
                <Route path="/404" element={ <NotFound /> } />
                <Route path="/*" element={ <NotFound /> } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  );
}

export default App;
