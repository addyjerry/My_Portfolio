import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Body/Home";
import Gallery from "./Components/Body/Gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
