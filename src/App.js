
import './App.css';

import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';


import Creators from  './pages/Creators'

function App() {
  return (
    <Router>
    <NavBar />

    <Routes>
      <Route path="/find_recipes" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/Creators" element={<Creators />} />
      <Route path="/about" element={<About />} />
     
    </Routes>
  </Router>
  );
}

export default App;