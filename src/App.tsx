import React from 'react';
import {Header} from "./components/Header/Header";
import {Attraction} from "./components/Attraction/Attraction";
import {Footer} from "./components/Footer/Footer";
import {AddForm} from "./components/common/AddForm";
import {Route, Routes } from 'react-router-dom';
import {HomePage} from "./views/HomePage";
import {OneAttracitionView} from "./views/OneAttracitionView";

export const App = () => {
  return (
      <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/add' element={<AddForm/>}/>
            <Route path='/:id' element={<OneAttracitionView/>}/>
        </Routes>
      </>
  );
}

export default App;
