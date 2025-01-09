import React, { useState, useEffect } from 'react';
import map from '../images/map.jpg';
import BusSearch from './BusSearch';

const CardLign = () => {
  const [trajets, setTrajets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const [busData, setBusData] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/trajets')
      .then(response => response.json())
      .then(data => {
        setTrajets(data);
        // console.log(data);
      })
      .catch(error => console.error('Erreur lors de la récupération des trajets :', error));
  }, []);


useEffect(() => {
  fetch('http://127.0.0.1:8000/api/bus-arrete') // Remplacez l'URL par celle de votre API
    .then(response => response.json())
    .then(data => {
      setBusData(data);
    })
    .catch(error => console.error('Erreur lors de la récupération des données des bus:', error));
}, []);







  const totalCards = trajets.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = trajets.slice(indexOfFirstCard, indexOfLastCard);

  const handleNextPage = () => {
    setCurrentPage(currentPage === totalPages ? currentPage : currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1);
  };

  return (
    <div>
      <BusSearch/>
      <div style={{marginTop:'90px'}} className="flex flex-wrap justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-4 mt-4" id='service'>
        {currentCards.map((bus) => (
          <div key={bus.id} style={{border:'1px solid #3b82f6', margin: '10px'}} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 border-2 mb-4 md:mb-0 md:w-1/4">
            <a href="#" className="border relative w-full h-56 bg-white flex justify-center items-center">
              <div  className="text-md absolute left-4 bottom-3 text-gray-700">{bus.lieu_depart}</div>
              <div className="text-md absolute right-4 bottom-2 text-gray-700" > Jusqu'a   <br></br><span style={{fontSize:'15px'}}>{bus.lieu_arrivee}</span></div>
              <img className="rounded-t-lg nbg w-full" src={map} alt="" />
            </a>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                <span style={{color:'#3b82f6'}} className="inline-block bg-zinc-200  rounded-full px-3 py-1 font-semibold text-zinc-700 dark:text-zinc-200 text-base">Les Arêtes</span>
                <span style={{color:'#3b82f6'}} className="inline-block bg-zinc-200  rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 dark:text-zinc-200">{bus.numéro_de_bus} </span>  
              </div>
            </div>
             
           <ul>
  {busData.map(busItem => {
    if (busItem.numéro_de_bus === bus.numéro_de_bus) {
      // Inverser l'ordre des arrêts
      const reversedArrivals = [...busItem.arrets].reverse();
      // Ajouter 15 minutes à chaque heure d'arrêt et rétablir l'ordre correct
      const adjustedArrivals = reversedArrivals.flatMap((arret, index) => {
        const heureArrivee = new Date(`01/01/2024 ${arret.heure_arete}`);
        heureArrivee.setMinutes(heureArrivee.getMinutes() + index * 0);
        const heureFormattee = heureArrivee.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return [
          { ...arret, heure_arete: heureFormattee }
        ];
      }).reverse(); // Rétablir l'ordre initial
      // Afficher les arrêts ajustés dans l'ordre croissant des heures d'arrivée
      return adjustedArrivals.sort((a, b) => {
        const heureA = new Date(`01/01/2024 ${a.heure_arete}`);
        const heureB = new Date(`01/01/2024 ${b.heure_arete}`);
        return heureA - heureB;
      }).map(arret => (
        arret && // Vérifier si arret est défini pour éviter les éléments nuls
        <li key={arret.lieu_arrete}>
          {arret.lieu_arrete} {arret.heure_arete}
        </li>
      ));
    }
    return null;
  })}
</ul>


                
             
          </div>
        ))}
      </div>
    

     

      <div style={{marginBottom:'10px'}}  className="flex justify-center items-center mt-4">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
        Précédente
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Suivant
        </button>
      </div>
      <div class="map-container">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52997.3767854355!2d-5.579219912967001!3d33.880998144511054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044d23bfc49d1%3A0xfbbf80a99e4cde18!2zTWVrbsOocw!5e0!3m2!1sfr!2sma!4v1713889658800!5m2!1sfr!2sma" 
            width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</div>
    </div>
  );
  

};

export default CardLign;
