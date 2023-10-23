import logo from "./logo.svg";
import "./App.css";
import FloatingGradient from "./FloatingGradient";
import Clouds from "./Clouds";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Calculator from "./Calculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashbord = () => <div>Dashboard</div>;
const NFTs = () => <div>NFTs</div>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="row">
          <Sidebar />
          <div className="col-md-11">
            <Header />
            <FloatingGradient />
            <Clouds />
            <Routes>
              <Route path="/" element={<Calculator />} />
              <Route path="calculator" element={<Calculator />} />
              <Route path="dashboard" element={<div>Dashboard</div>} />
              <Route path="nfts" element={<div>NFTS</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
