import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import AppRouter from './AppRouter';



const domNode = document.getElementById('root');
const root = createRoot(domNode);

// root.render(<App />);
root.render(<AppRouter />);