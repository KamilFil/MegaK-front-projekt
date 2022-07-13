import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {HomePage} from "./views/HomePage";
import {AttractionSingleView} from "./views/Attraction-SingleView";
import {AttractionAdd} from "./views/Attraction-Add";
import {ErrPage} from "./views/Err-Page";

export const App = () => {
  return (

             <Routes>

                <Route path='/' element={<HomePage/>}/>
                <Route path='/add' element={<AttractionAdd/>}/>
                <Route path='/att/:id' element={<AttractionSingleView/>}/>
                 <Route path="/404" element={<ErrPage />}/>
                 <Route path="*" element={<ErrPage />}/>
              </Routes>

  );
}

export default App;
