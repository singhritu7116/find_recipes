import logo from './logo.svg';
import './App.css';

import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import anime from "./anime.json";
import Lottie from "lottie-react";
import Creators from  './pages/Creators'

function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/Creators" element={<Creators/>} />
        {/* <Route path="/recipes/:recipeId" element={<RecipeDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;