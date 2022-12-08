import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Personajes from './Personajes';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/personajes" element={<Protected Cmp={Personajes}/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
