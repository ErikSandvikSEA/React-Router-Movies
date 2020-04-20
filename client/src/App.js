import React, { useState } from 'react';
import { render } from 'react-dom'

import SavedList from './Movies/SavedList';
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router>
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
    </div>
    </Router>
  );
};

export default App;
