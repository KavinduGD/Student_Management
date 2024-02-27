import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
