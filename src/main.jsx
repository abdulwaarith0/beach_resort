import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from './context/Context.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoomProvider>
      <Router>
        <App />
      </Router>
    </RoomProvider>
  </React.StrictMode>,
);
