import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
// import { AppContext} from './context';
import './styles.css';
import { AppContext } from "./context/contextApi";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AppContext>
    <GifExpertApp />
    </AppContext>
 
  // </React.StrictMode>
);
