import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/> }>
       </Route>
      <Route path="/" element={<Home/>}>
       </Route>
      <Route path="*" element={<NotFound />}>
       </Route>
        
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
