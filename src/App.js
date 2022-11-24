
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import MainPage from './component/MainPage';
import Cards from './component/Card';
import ProtectedRoute from './component/ProtectedRouter';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/" element={
          <ProtectedRoute><MainPage/></ProtectedRoute>}/>
          <Route path="/card" element={<Cards/>}/>
          </Routes>
          </Router>
    </div>
  );
}

export default App;
