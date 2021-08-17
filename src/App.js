import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarComponent from './components/navbar/NavbarComponent';
import HomePages from './pages/home/HomePages';


function App() {

  return (

    <>


    <BrowserRouter>

      <NavbarComponent/>
      
    <Route path="/" exact component={HomePages}/>

    </BrowserRouter>
    </>
  );
}

export default App;
