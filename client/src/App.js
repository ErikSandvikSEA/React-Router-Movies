import React, { useState } from 'react'
// STEP 2 - import Route, Switch and Link from react router
import { Route, Switch } from 'react-router-dom'

import SavedList from './Movies/SavedList'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  console.log(savedList)

  const addToSavedList = movie => {
    if(savedList.includes(movie)){
    } else {
    setSavedList([...savedList, movie]);
    }
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Switch>   {/* STEP 3 - WRAP COMPONENTS IN ROUTES */}
        <Route path={`/movies/:id`}>
          <Movie savedList={savedList} addToSavedList={addToSavedList}/>
        </Route>

        <Route path='/'>
          <MovieList />
        </Route>
      </Switch>

    </div>
  );
};

export default App;
