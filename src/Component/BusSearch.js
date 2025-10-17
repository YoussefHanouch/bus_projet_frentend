



import React, { useState, useEffect } from 'react';

function BusSearch() {
  const [busData, setBusData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('https://busbackend.infinityfree.me/api/allarret')
      .then(response => response.json())
      .then(data => {
        const formattedData = formatBusData(data);
        setBusData(formattedData);
      })
      .catch(error => console.error('Erreur lors de la récupération des données des arrêts de bus:', error));
  }, []);

  useEffect(() => {
    // Filtrer les suggestions uniquement lorsque la longueur du texte saisi dépasse un certain seuil
    if (searchQuery.length > 2) {
      const filteredSuggestions = busData
        .map(bus => bus.arrets.map(arret => arret.lieu_arrete))
        .flat()
        .filter(place => place.toLowerCase().includes(searchQuery.toLowerCase()));

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, busData]);

  const formatBusData = (data) => {
    const formattedData = [];
    for (let i = 0; i < data.length; i += 3) {
      const numéro_de_bus = data[i];
      const lieu_arrete = data[i + 1];
      const heure_arete = data[i + 2];
      formattedData.push({ numéro_de_bus, arrets: [{ lieu_arrete, heure_arete }] });
    }
    return formattedData;
  };

  const handleSearch = () => {
    if (selectedPlace.trim() === '') {
      console.error('Aucune place sélectionnée.');
      return;
    }

    const results = busData.filter(bus =>
      bus.arrets.some(arret =>
        arret.lieu_arrete.toLowerCase().includes(selectedPlace.toLowerCase())
      )
    );

    setSearchResults(results);
    setShowPopup(true);
  };

  return (
    <div className="mt-16">
      <input
        type="text"
        placeholder="Saisir le nom de la place..."
        value={selectedPlace}
        onChange={e => setSelectedPlace(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mr-2"
      />
      {/* Afficher les suggestions uniquement si la longueur du texte saisi dépasse 2 caractères */}
      {searchQuery.length > 2 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => setSelectedPlace(suggestion)}>{suggestion}</li>
          ))}
        </ul>
      )}
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Rechercher</button>

      {/* Affichage de la popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50" >
          <div className="bg-white p-6 rounded-md shadow-md" style={{width:'70%',height:'70%'}}>
            {searchResults.length > 0 ? (
              <table className="border-collapse border border-gray-400" style={{marginTop:'5%'}}>
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-4 py-2">Bus numéro</th>
                    <th className="border border-gray-400 px-4 py-2">Arrêt</th>
                    <th className="border border-gray-400 px-4 py-2">Heure</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map(bus => (
                    bus.arrets.map((arret, index) => (
                      <tr key={`${bus.numéro_de_bus}-${index}`} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                        {index === 0 && <td rowSpan={bus.arrets.length} className="border border-gray-400 px-4 py-2">{bus.numéro_de_bus}</td>}
                        <td className="border border-gray-400 px-4 py-2">{arret.lieu_arrete}</td>
                        <td className="border border-gray-400 px-4 py-2">{arret.heure_arete}</td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Aucun résultat trouvé.</p>
            )}
            <button onClick={() => setShowPopup(false)} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600">Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BusSearch;
