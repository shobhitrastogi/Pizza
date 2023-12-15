
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path='/'exact element={<Home/>}/>
        <Route  path='/menu'exact element={<Menu/>}/>
        <Route  path='/about'exact element={<About/>}/>
        <Route  path='/contact'exact element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
