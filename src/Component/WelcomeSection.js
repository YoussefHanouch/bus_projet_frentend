import React, { useEffect } from 'react';
import { useState } from 'react';
import bus1 from '../images/bus1.jpg';
import bus2 from '../images/bus2.jpg';
import bus3 from '../images/bus3.jpg';
import bus4 from '../images/bus4.jpg';

const images = [bus1, bus2, bus3, bus4];


const WelcomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(true);
  };
  const handleShowMoins = () => {
    setShowMore(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, []); // Runs once when component mounts

  const goToPreviousImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section   className="relative min-h-screen" id='accueil'>
       <img
      src={images[currentImageIndex]}
      alt="Welcome"
      className="absolute inset-0 w-full h-full object-cover bg-slate-300"
      style={{ filter: 'blur(5px)' }} // Applique un flou de 5 pixels à l'image
    />
   <div  className="relative overflow-hidden min-h-screen flex items-center justify-center">
  <div  className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg bg-opacity-45 flex flex-col justify-center items-start"> {/* Added flex and items-start */}
    <h1 className="text-4xl md:text-7xl mb-6 text-center text-blue-600">Bienvenue sur notre site web de gestion des bus!</h1>
    <p className={`text-lg md:text-xl mb-8 ${showMore ? 'block' : 'hidden'}`}>
      Réservez facilement vos trajets, profitez d'un suivi en temps réel et bénéficiez d'une expérience de voyage pratique et sans tracas. Rechargez votre carte ou abonnez-vous mensuellement pour économiser encore plus. Découvrez dès maintenant notre application et simplifiez vos déplacements en bus!
    </p>
    {!showMore && (
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block mx-auto" onClick={handleShowMore}>
        Voir plus
      </button>
    )}
    {showMore && (
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block mx-auto" onClick={handleShowMoins}>
        Voir moins
      </button>
    )}
  </div>
</div>


     
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded"
        onClick={goToPreviousImage}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded"
        onClick={goToNextImage}
      >
        &gt;
      </button>
    </section>
  );
};


export default WelcomeSection;
