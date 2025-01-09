// import React, { useState } from 'react';
// import '../style/login.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';


// const Login= () => {
//   const [email, setEmail] = useState('');
//   const [password, setpassword] = useState('');
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setpassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const userData = { email, password }; // Utilisez le nom de champ 'password' pour le mot de passe
//         const response = await axios.post('http://127.0.0.1:8000/api/login', userData);
//         console.log(response.data);
//         // Redirection vers une autre page après une connexion réussie si nécessaire
//     } catch (error) {
//         console.error('Error during login:', error);
//         // Affichez un message d'erreur à l'utilisateur si la connexion échoue
//     }
// };
//   return (
//     <div className="login-container">
//       <div className="login-box">
//       <h2 style={{color:'#3b82f6'}}>Connectez-vous</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="textbox">
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Adresse e-mail"
//               value={email}
//               onChange={handleEmailChange}
//               required
//               autoFocus
//             />
//           </div>

//           <div className="textbox">
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Mot de passe"
//               value={password}
//               onChange={handlePasswordChange}
//               required
//               autoComplete="current-password"
//             />
//           </div>

//           <div className="">
           
//             <button type="submit" className="btn">Se connecter</button>
//           </div>
//           <br />
//           {/* <a className="forgot-password " style={{color:'#3b82f6'}} href="#">Mot de passe oublié ? <br /><br /></a>  */}
//           <Link className="forgot-password" style={{ color: '#3b82f6' }} to="/Resetmdps">
//                     Mot de passe oublié ? <br /><br />
//                 </Link>
//           <p className="register-link">Pas encore de compte ? <a style={{color:'#3b82f6'}} href="/inscription">Inscrivez-vous</a></p>
//         </form>
//       </div> 
//     </div>
  
//   );
// };

// export default Login;
import React, { useState } from 'react';
import '../style/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      const response = await axios.post('http://127.0.0.1:8000/api/login', userData);
      console.log(response.data);
      // Redirection vers une autre page après une connexion réussie si nécessaire
    } catch (error) {
      console.error('Error during login:', error);
      // Affichez un message d'erreur à l'utilisateur si la connexion échoue
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 style={{ color: '#3b82f6' }}>Connectez-vous</h2>
        <form onSubmit={handleSubmit}>
          <div className="textbox">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Adresse e-mail"
              value={email}
              onChange={handleEmailChange}
              required
              autoFocus
            />
          </div>

          <div className="textbox">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={handlePasswordChange}
              required
              autoComplete="current-password"
            />
          </div>

          <div className="">
            <button type="submit" className="btn">Se connecter</button>
          </div>
          <br />
          <Link className="forgot-password" style={{ color: '#3b82f6' }} to="/Resetmdps">
            Mot de passe oublié ? <br /><br />
          </Link>
          <p className="register-link">Pas encore de compte ? <a style={{ color: '#3b82f6' }} href="/inscription">Inscrivez-vous</a></p>
        </form>
      </div>
      <button onClick={handlePrint}>Imprimer</button>
    </div>
  );
};

export default Login;
