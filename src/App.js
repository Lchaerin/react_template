import './App.css';

import { createStore } from 'redux';
import reducer from './reducer';

import { useState } from 'react';

const store = createStore(reducer);

function App() {
  const [ count, setCount ] = useState(store.getState().count);

  return (
    <div className="App">
      <div className="block">-</div>
      <div className="block">{count}</div>
      <div className="block">+</div>
    </div>
  );
}

export default App;
