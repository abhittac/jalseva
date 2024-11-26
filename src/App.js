import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Contact from './Contact';
import ServiceCards from './ServiceCards';
import { useRef } from 'react';
import Footer from './Footer';
import ProductList from './ProductList';

function App() {
  const serviceRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <>
    <Navbar serviceRef={serviceRef} 
    homeRef={homeRef}
    contactRef={contactRef}
    aboutRef={aboutRef}
    />
    <div ref={homeRef}>
        <Banner />
      </div>

      <div ref={serviceRef}>
        <ServiceCards />
      </div>
      <ProductList/>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div ref={aboutRef}>
        <Footer />
      </div>
    </> 
  );
}

export default App;
