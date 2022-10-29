import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PairProvider from './context/pair';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PairProvider>
      <App />
    </PairProvider>
  </React.StrictMode>,
);
