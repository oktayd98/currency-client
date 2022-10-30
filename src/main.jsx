import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PairProvider from './context/pair';
import ActionCable from 'actioncable';
import { ActionCableProvider } from '@thrash-industries/react-actioncable-provider';
import './index.css';

const cable = ActionCable.createConsumer(import.meta.env.VITE_SOCKET_URL);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActionCableProvider cable={cable}>
      <PairProvider>
        <App />
      </PairProvider>
    </ActionCableProvider>
  </React.StrictMode>,
);
