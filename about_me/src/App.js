// system
import { useState } from "react";
import { useEffect } from 'react';
import { Provider } from "./context";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import './App.css';
import TitleBar from "./components/TitleBar/TitleBar";
import MainPage from "./MainPage/MainPage";



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
    Johnny_Icon:require('./images/Johnny_Icon.png'),
    MyBGPic:require('./images/me.jpg'),
    MyPic:require('./images/m32.jpg'),
    TitleBarMenu:{
      "關於我":"AboutMe",
      "求學經歷":{
        "大學":"University",
        "機器人研究中心":"Robotics_Research_Center",
        "碩士":"Graduate_School"
      },
      "工作經歷":"Work_Experience",
      "其他經歷":"Other_Experience"
    },
    MyName : "葉昕語",
    MyNameInEnglish:"Yeh,Shin Yeu",
    MyEnglishName:"Johnny Yeh"
  };


  return (
    <Provider value={contextValue}>
      <div className="App">
        <TitleBar/>
        <MainPage />


      </div>
    </Provider>
  );
}

export default App;
library.add(fab, fas, far)