import TopBar from './Components/topbar/TopBar';
import Intro from './Components/intro/Intro';
import Portfolio from './Components/portfolio/Portfolio';
import Works from './Components/Works/Works';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import './app.scss';
import {useState} from'react';
import Menu from './Components/Menu/Menu';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
