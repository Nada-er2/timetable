import React from "react";
import { useNavigate } from "react-router-dom";
import '../style_pages/Accueil.css';

function Accueil() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <img src={`${process.env.PUBLIC_URL}/logo-sans-bg.png`} alt="logo ofppt" className="logo" />
      </nav>

      <main className="main-container">
        <section className="container1">
          <img src={`${process.env.PUBLIC_URL}/container1.webp`} alt="ofppt" className="hero-img" />
        </section>

        <section className="container2">
          <div className="buttons">
            <button className="btn btn_stagiaire" onClick={() => navigate('/stagiaire')}>
              Espace Stagiaire <img className="img-fleche" src={`${process.env.PUBLIC_URL}/fleche-droite.png`} alt="fleche-droite" />
            </button>
            <button className="btn btn_formateur" onClick={() => navigate('/formateur')}>
              Espace Formateur <img className="img-fleche" src={`${process.env.PUBLIC_URL}/fleche-droite.png`} alt="fleche-droite" />
            </button>
            <button className="btn btn_admin" onClick={() => navigate('/administrateur')}>
              Espace Administrateur <img className="img-fleche1" src={`${process.env.PUBLIC_URL}/fleche-droite.png`} alt="fleche-droite" />
            </button>
          </div>
        </section>
      </main>
        {/* Footer */}
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={`${process.env.PUBLIC_URL}/logo-sans-bg.png`} alt="logo ofppt" />
          </div>

          <section className="footer-section">
            <p>
              Site de gestion des emplois du temps de notre institution – Simple et efficace.
              Notre site a pour but de faciliter l'organisation des horaires de travail
              et des cours pour tous les membres de l'institution...
            </p>
            <p>
              Si un utilisateur entre un texte incorrect plus de trois fois,
              le bouton de validation sera caché pour éviter les erreurs répétées.
            </p>
          </section>
        </div>
        <hr />
        <p className="copyright">© 2025 OFPPT - Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Accueil;

