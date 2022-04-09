import Hero from './Components/Hero/Hero';
import Benefits from './Components/Benefits/Benefits';
import Work from './Components/Work/Work';
import Join from './Components/Join/Join';
import Waitlist from './Components/Waitlist/Waitlist';
import Together from './Components/Together/Together';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Benefits />
      {/* <Work />
      <Join />
      <Waitlist />
      <Together />
      <Footer /> */}
    </div>
  );
}

export default App;
