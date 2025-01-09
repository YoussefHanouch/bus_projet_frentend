import React from 'react';
import logo from '../images/logo.png';

const Footer = () => {
  const menulinks = [
    { name: "ACCUEIL", link: '/' },
    { name: "SERVICE", link: '/service' },
    { name: "CART", link: '/cart' },
    { name: "TARIF PAR LIGNE", link: '/tarif' },
    { name: "SE CONNECTER", link: '/connexion' },
    { name: "S'INSCRIRE", link: '/inscription' },
    // { name: "ADMINISTRATION", link: '/administration' },
  ];

  return (
    <footer  className="bg-white dark:bg-gray-900" style={{backgroundColor:'red'}}>
      <div  className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src={logo} className="h-28 me-3 darken" alt="FlowBite Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {menulinks.map((link, index) => (
              <div key={index}>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href={link.link} className="hover:underline">{link.name}</a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">Busma </a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
              </svg>
            </a>
            {/* Ajoutez d'autres liens ici */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
