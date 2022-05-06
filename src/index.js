import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ClothingStore from './store/ClothingStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    clothes: new ClothingStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
)