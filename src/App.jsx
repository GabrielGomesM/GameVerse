  import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sobre from "./components/Sobre/Sobre";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
