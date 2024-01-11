import React from 'react';
import logo from '../../assets/logo.svg';
import '../../styles/pages/error.css';

function Error() {
  return (
    <div className="error">
      <div className="errorText">
        <h2>
          Le serveur{' '}
          <img
            className="logo"
            src={logo}
            alt="sportSee"
            aria-label="logo sportSee"
          />{' '}
          est inaccessible
        </h2>
        <p>Désolé, nous n'avons pas pu nous connecter au serveur.</p>
        <p>Veuillez réessayer plus tard....</p>
      </div>
    </div>
  );
}

export default Error;
