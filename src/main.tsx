import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Gc } from './GC';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Gc>
            <App />
        </Gc>
    </React.StrictMode>
);
