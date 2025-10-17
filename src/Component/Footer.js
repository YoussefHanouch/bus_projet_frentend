import React from 'react';
import logo from '../images/logo.png';

const Footer = () => {
  const menulinks = [
    { name: "ACCUEIL", link: '/' },
    { name: "SERVICE", link: '/service' },
    { name: "CART", link: '/cart' },
    { name: "TARIF PAR LIGNE", link: '/tarif' },
    { name: "SE CONNECTER", link: 'https://busbackend.infinityfree.me/login' },
    { name: "S'INSCRIRE", link: '/inscription' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          {/* Logo */}
          <div className="mb-8 lg:mb-0">
            <img src={logo} alt="Busma Logo" className="h-20" />
          </div>

          {/* Liens de navigation */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 lg:mb-0">
            {menulinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bouton d'action */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <a
              href="/inscription"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Commencer Maintenant
            </a>
          </div>
        </div>

        {/* Séparateur */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Copyright et liens légaux */}
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <p className="text-gray-400 text-sm mb-4 lg:mb-0">
            © 2023 Busma. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
