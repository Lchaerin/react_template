import './App.css';

import { createStore } from 'redux';
import reducer from './reducer';
import increase from './action'

import { useState } from 'react';

const store = createStore(reducer);

function App() {
  const [ count, setCount ] = useState(store.getState().count);

  return (
    <div className="App">
      <div className="block" onClick={() => (
        store.dispatch(increase(-1))
      )}>-</div>
      <div className="block">{count}</div>
      <div className="block" onClick={() => (
        store.dispatch(increase(1))
      )}>+</div>
    </div>
  );
}

export default App;
