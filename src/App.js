import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css'
import RecipeDatails from './components/RecipeDatails'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Lab-9-Working-with-APIs-in-React.js" element={<Home />} />
            <Route path="/recipe-details/:id" element={<RecipeDatails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
