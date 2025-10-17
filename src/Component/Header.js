import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
function Navbar() {
  const[sticky,setSticky]=useState(false);
  const[openMenu,setopenMenu]=useState(false);

const menulinks = [
  { name: "ACCUEIL", link: '/' },
  { name: "SERVICE", link: '/service' },
  { name: "CART", link: '/cart' },
  { name: "TARIF PAR LIGNE", link: '/tarif' },
  { name: "SE CONNECTER", link: 'https://busbackend.infinityfree.me/login' },
  { name: "S'INSCRIRE", link: '/inscription' },
  // { name: "ADMINISTRATION", link: '/administration' },
];

useEffect(() => {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    window.scrollY > 0 ? setSticky(true) : setSticky(false);
  });
}, []);

  return (
    <div>
            <a href='http://127.0.0.1:8000/dash'>skjhgf</a>

       <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white  text-gray-900" : "text-white"
      }`}
    >
        <div className='flex items-center justify-between'>
           <div className='mx-7'>
<h4 className='text-4xl uppercase font-bold'> 
<img src={logo} alt="Logo" style={{height:'70px'}} className="navbar-logo" />

</h4>
            </div> 
            <div style={{marginbottom:'400px'}} className='text-gray-900 md:block hidden px-7   py-7 font-medium  bg-white rounded-bl-full'>
            <ul className='flex items-center gap-1 text-lg' >
                {menulinks.map((menu,index)=>{
                  return(
                  <li key={index} className='px-6 hover:text-cyan-600' >
                    <Link to={menu.link}>{menu.name}</Link>
                  </li>)


                }
                )}
                
               </ul>
               </div>
               <div onClick={()=>setopenMenu(!openMenu)}
                className={`z-[999] ${openMenu
                 ? 'text-gray-900' : 'text-gray-100'} 
                 text-3xl md:hidden m-5`}>
                <ion-icon style={{color:'black'}} name='menu'></ion-icon>
                {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
                </div>
                <div className={`md:hidden
                 text-gray-900 absolute w-2/3 h-screen
                  px-7 py-2 font-medium bg-white top-0 
                  ${openMenu ? 'right-0' : 'right-[-100%]'} 
                  right-0`}>
                  <ul className='flex flex-col justify-center h-full gap-10 py-2  text-lg'>
                  {menulinks.map((menu,index)=>{
                  return(
                  <li key={index} className='px-6 hover:text-cyan-600' >
                    <a href={menu.link}>{menu.name}</a>
                  </li>)


                }
                )}

                  </ul>
                </div>
           
        </div>
      </nav>

    </div>
  )
}

export default Navbar

