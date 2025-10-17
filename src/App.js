import './App.css';
import Header from './Component/Header';
import WelcomeSection from './Component/WelcomeSection';
import Footer from './Component/Footer';
import Login from './Component/Login';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import TarifTable from './Component/Tarif';
import { tarifs } from './Component/data';
import Inscription from './Component/Inscription';
import SectionIcon from './Component/sectionicone';
import Cardbus from './Component/cartBus';
import CardLign from './Component/CardLign';
import BusSearch from './Component/BusSearch';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogin = () => {
    // Logique de connexion...
    setIsLoggedIn(false);
  };
  
  return (
    <div className="App">
      {/*  */}
      <Header/>
      
      <Routes>
        <Route path="/" element={<> 
         
          <WelcomeSection />
          <SectionIcon /> <br/>
          <CardLign />
          <Cardbus/>
        
         <br></br>

        </>} />
        <Route path="/connexion" element={<Login  setIsLoggedIn={handleLogin}/>} />
        <Route path="/service" element={<CardLign  />} />
        <Route path="/cart" element={<Cardbus  />} />
 
        <Route path="/tarif" element={<TarifTable tarifs={tarifs}/>} />
           <Route path="/inscription" element={<Inscription/> } />
           <Route path="/BusSearch" element={<BusSearch/> } />

        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
      {/*  */}

      </div>
  );
}

export default App;
