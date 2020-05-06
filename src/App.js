import React from 'react';
import './App.css';
import QuoteBox from './Components/QuoteBox';

function App() {
  return (
    <div className="App container row bg-light" >
      <QuoteBox id="quote-box" />
    </div>
  );
}

export default App;
