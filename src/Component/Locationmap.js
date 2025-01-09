import React, { useState } from 'react';

const LocationSearch = () => {
    const [query, setQuery] = useState('');
    const [map, setMap] = useState(null);
    const [places, setPlaces] = useState([]);
    
    // Initialize Google Maps API
    const initMap = () => {
        const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 0, lng: 0 },
            zoom: 8
        });
        setMap(mapInstance);
    };

    // Handle search query change
    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    // Perform geocoding and display results
    const handleSearch = () => {
        const service = new window.google.maps.places.PlacesService(map);

        service.textSearch({
            query: query
        }, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setPlaces(results);

                // Display markers on the map for each result
                results.forEach(place => {
                    new window.google.maps.Marker({
                        position: place.geometry.location,
                        map: map,
                        title: place.name
                    });
                });

                // Zoom to the first result
                if (results.length > 0) {
                    map.setCenter(results[0].geometry.location);
                    map.setZoom(12);
                }
            }
        });
    };

    return (
        <div>
            <input type="text" value={query} onChange={handleQueryChange} placeholder="Enter location" />
            <button onClick={handleSearch}>Search</button>
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
        </div>
    );
};

export default LocationSearch;
