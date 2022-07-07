import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Attraction} from "./components/layout/homepage/Attraction";
import {Header} from "./components/layout/homepage/Header";
import {Footer} from "./components/layout/homepage/Footer";
import {AddForm} from "./components/common/AddForm";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<App />*/}
      <Header/>
      <Attraction/>
      <Footer/>
      <AddForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
