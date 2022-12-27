import './App.css';
// import Auth from './services/Auth';
import LoginForm from './Components/LoginForm';
// import {  Link} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom'
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <ul>
        {/* <li><Link to="/login" >
                login
              </Link></li> */}
      </ul>
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
