import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./component/MainPage";
import Cards from "./component/Card";
// import ProtectedRoute from './component/ProtectedRouter';
import Order from "./component/Order";
import Address from "./component/Address";
import ChooseAdd from "./component/ChooseAdd";
import Payment from "./component/Payment";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/order" element={<Order />} />
          <Route path="/address" element={<Address />} />
          <Route path="/chooseadd" element={<ChooseAdd />} />
          <Route path="/payment" element={<Payment/>} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
