import React from 'react';
import '../style/cart.css';
import cart1 from '../images/Cart1.png';
import cart from '../images/Cart.png';

const Cart = () => {
  return (
    <>
  <div style={{width:'70%',marginTop:'80px'}} className="flex dd flex-col justify-center items-center p-8 rounded-lg shadow-md"  id='cart'>
    <h1 className="text-4xl mb-6" style={{ color: '#3b82f6' }}>Nos titres de transport</h1>
    <div className="w-3/4 text-center text-xl">

    Simplifiez vos déplacements à Meknès avec Meknabus. Optez pour l'abonnement mensuel pour 
    étudiants ou profitez de la flexibilité offerte par 
    la carte rechargeable. Choisissez parmi ces options
     pour obtenir les informations nécessaires et trouver la carte qui vous convient le mieux.    </div>
</div>

<div className="grid grid-cols-2 place-items-center gap-1 max-sm:grid-cols-1 mt-8">
    <div className="crt">
        <img src={cart1} className="shadow-xl hover:shadow-2xl rounded-md" alt="Carte abonnement" />
        <div className="text-center text-xl font-bold mt-4">Carte abonnement</div>
    </div>
    <div className="crt">
        <img src={cart} className="shadow-xl hover:shadow-2xl rounded-md" alt="Carte étudiant" />
        <div className="text-center text-xl font-bold mt-4">Carte étudiant</div>
    </div>
</div>



      
    
    </>
  );
};

export default Cart;
