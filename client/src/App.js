import React, { useState } from 'react'
// STEP 2 - import Route, Switch and Link from react router
import { Route, Switch, Link, useParams } from 'react-router-dom'

import SavedList from './Movies/SavedList'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const { id } = useParams()

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Route path={`/movies/${id}`}>
        <Movie />
      </Route>

      <Route path='/'>
        <MovieList />
      </Route>

    </div>
  );
};

export default App;
