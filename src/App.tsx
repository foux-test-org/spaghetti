import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import History from "./pages/history";
import Types from "./pages/Types";
import Recipes from "./pages/Recipes";
import FunFacts from "./pages/funFacts";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/types" element={<Types />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/facts" element={<FunFacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
