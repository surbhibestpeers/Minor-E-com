import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./component/MainPage";
import Cards from "./component/Card";
// import ProtectedRoute from './component/ProtectedRouter';
import AddProduct from "./component/Add";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/card" element={<Cards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
