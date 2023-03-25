
import './App.css';
import SingersData from './components/SingersData';
import SingerList from './components/SingerList';
import EventDate from './components/EventDate';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h2>StarClinch</h2>
        <h4>Hello , Noor</h4>
      </header>
      <EventDate />
      < SingerList singer={SingersData} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
