import logo from './logo.svg';
import './App.css';
import FloatingGradient from "./FloatingGradient";
import Clouds from "./Clouds";
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Calculator = () => <div>Calculator</div>;
const Dashbord = () => <div>Dashboard</div>;
const NFTs = () => <div>NFTs</div>;

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Sidebar />
      <div className="main-content">
      <Header />
      <FloatingGradient />
      <Clouds />
      <Routes>
      <Route path="/" element={<div>CalculatorAAAAAAAAAAAAAA</div>} />
      <Route path="calculator" element={<div>CalculatorAAAAAAAAAA</div>} />
      <Route path="dashboard" element={<div>Dashboard</div>} />
      <Route path="nfts" element={<div>NFTS</div>} />
      </Routes>
    </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
