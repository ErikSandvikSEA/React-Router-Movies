// 👉 Importing React libs from node_modules folder
import React from 'react';
import { render } from 'react-dom';

// 👉 STEP 1 - Importing React Router's Router
import { BrowserRouter as Router } from 'react-router-dom'

// 👉 Importing the top-level components
import './index.css';
import App from './App';


render(
     <Router>
          <App />
     </Router>
     , document.getElementById('root'));
