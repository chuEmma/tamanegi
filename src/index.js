import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PrintsPage from './PrintsPage';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck, faStore, faImage, faCircle} from '@fortawesome/free-solid-svg-icons';

// Add fontAwesome icons
library.add(faCircleCheck);
library.add(faStore);
library.add(faImage);
library.add(faCircle);
library.add(fab);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrintsPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
