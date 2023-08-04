import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/index.css';

// ReactDOM pour s'attacher à notre HTML.
const root = ReactDOM.createRoot(document.getElementById('root'));
//dans la variable root on affiche tout mon application on importe
// le composant parent App.js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
