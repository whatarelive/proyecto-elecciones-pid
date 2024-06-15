import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { EleccionesApp } from './EleccionesApp.tsx';
import "./util/Styles/index.css";


const root = document.getElementById('root');

if ( root instanceof HTMLDivElement ) {
  const element = ReactDOM.createRoot( root );
  
  element.render(
    <React.StrictMode>
      <BrowserRouter>
        <EleccionesApp/>
      </BrowserRouter>
    </React.StrictMode>
  )
}
