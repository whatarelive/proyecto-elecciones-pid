import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { EleccionesApp } from './EleccionesApp.tsx';
import "./util/Styles/index.css";
import { store } from './redux/store';
import { Provider } from 'react-redux';


const root = document.getElementById('root');

if ( root instanceof HTMLDivElement ) {
  const element = ReactDOM.createRoot( root );
  
  element.render(
    <React.StrictMode>
      <Provider store={ store }>
        <BrowserRouter>
          <EleccionesApp/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}
