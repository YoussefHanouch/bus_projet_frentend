import { useEffect, useState } from 'react';
import React  from 'react';
import '../style/tarif.css';
const TarifTable = (props) => {
  const [tarifs, setTarifs] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/buses') // Assurez-vous que l'URL correspond à votre endpoint API
      .then(response => response.json())
      .then(data => setTarifs(data))
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  }, []);

  return (
    <div className="px-20 max-sm:px-0">
      <table className="tableau-tarif" dir="ltr" cellSpacing="0" cellPadding="0">
        <colgroup>
          <col width="228" />
          <col width="294" />
          <col width="294" />
          <col width="294" />
        </colgroup>
        <tbody>
          <tr className="tableau-entete">
            <td>numéro_de_bus</td>
            <td>Origine</td>
            <td>Destination</td>
            <td>Tarifs</td>
          </tr>
          {tarifs.map((row, index) => (
            <tr key={index}>
              <td>{row.numéro_de_bus}</td>
              <td>{row.Origine}</td>
              <td>{row.Destination}</td>
              <td>{row.Tarifs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default TarifTable;
