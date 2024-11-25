import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Contact from './Contact';
import ServiceCards from './ServiceCards';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <ServiceCards/>
    <Contact/>
    </> 
  );
}

export default App;
