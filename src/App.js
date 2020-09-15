import React from 'react';
import './App.css';
import SongsContainer from './containers/SongsContainer';

function App() {
  return (
    <div className="App">
      <>
        <h1 id="site-title">Top 20 Chart</h1>
        <SongsContainer />
      </>
    </div>
  );
}

export default App;
