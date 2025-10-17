import React, { useState } from 'react';
import '../style/inscription.css';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate
import axios from 'axios'; // Import de Axios
// Initialisation du hook useHistory

const Inscription = () => {
    const navigate = useNavigate(); // Initialisation de useNavigate
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envoi de la requête POST à l'API Laravel
            const response = await axios.post('https://busbackend.infinityfree.me/api/test', {
                name: nom,
                prenom: prenom,
                email: email,
                type: 'user', // Vous pouvez modifier ceci en fonction de vos besoins
                password: password,
            });
            console.log(response.data); // Affichage de la réponse de l'API
            window.location.href = 'https://busbackend.infinityfree.me/login'; // Redirect to login page


            // Ajoutez ici la logique pour gérer la réponse de l'API, par exemple rediriger l'utilisateur vers une autre page
        } catch (error) {
            console.error(error); // Affichage des erreurs
            // Ajoutez ici la logique pour gérer les erreurs, par exemple afficher un message d'erreur à l'utilisateur
        }
    };

    return (
        <div className="container">
            <div className="signup-container">
                <div className="signup-box">
                    <h2 style={{ color: '#3b82f6' }}>Inscription</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="textbox">
                            <input
                                type="text"
                                placeholder="Nom"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                required
                            />
                        </div>

                        <div className="textbox">
                            <input
                                type="text"
                                placeholder="Prénom"
                                value={prenom}
                                onChange={(e) => setPrenom(e.target.value)}
                                required
                            />
                        </div>

                        <div className="textbox">
                            <input
                                type="email"
                                placeholder="Adresse email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="textbox">
                            <input
                                type="password"
                                placeholder="Mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="textbox">
                            <input
                                type="password"
                                placeholder="Confirmer le mot de passe"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                required
                            />
                        </div>

                        <input className="btn" type="submit" value="S'inscrire" />
                    </form>

                    <p style={{ textAlign: 'center', marginTop: '20px' }}>
                        Déjà un compte ? <a className="signup-link" href="https://busbackend.infinityfree.me/login">Connectez-vous</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Inscription;
