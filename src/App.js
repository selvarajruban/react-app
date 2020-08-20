import React from 'react';
import './App.css';
import HomepageImage from './components/HomePageImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomepageImage />
        <p>
          <code>Welcome to React world</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to Submit
        </a>
      </header>
    </div>
  );
}

export default App;
