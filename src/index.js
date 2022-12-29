import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/main-component/App/App';
import reportWebVitals from './reportWebVitals';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/flaticon.css';
import './sass/style.scss';
import { inject } from '@vercel/analytics';

inject();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();
