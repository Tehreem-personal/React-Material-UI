import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import Home from './components/Home';
import Imagedetail from './components/Imagedetail';


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}>
        
        </Route>
        <Route path="/image/:id" element={<Imagedetail/>}>
       
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
