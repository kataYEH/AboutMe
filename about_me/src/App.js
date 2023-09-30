// system
import { useState } from "react";
import { useEffect } from 'react';
import { Provider } from "./context";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import './App.css';
import NavBar from "./components/NavBar/NavBar";

// Libary
import SiteNav, {ContentGroup} from 'react-site-nav'

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'




function App() {
  // Golbal
  const contextValue = {
    MyName : "葉昕語",
    MyNameInEnglish:"Yeh,Shin Yeu",
    MyEnglishName:"Johnny Yeh"
  };



  return (
    <Provider value={contextValue}>
      <div className="App">
        <NavBar/>
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        <FontAwesomeIcon icon="fa-regular fa-eye" />

        
        {/* <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/my-story" component={MyStory}/>
        </Switch> */}



      </div>
    </Provider>
  );
}

export default App;
library.add(fab, fas, far)