// system
import { useContext } from "react";
import context from "../context";
import { useEffect, useState ,useMemo, useRef} from "react";

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// CSS
import './MainPage.css';




const MainPage = (props) => {
  const { MyBGPic,MyName } = useContext(context);
//   const { TitleBarMenu } = props;


  return (
    <div className="MainPage">
        <div className="MyBGPicContainer">
            <img src={MyBGPic} className="MyBGPic" alt="" />
            <p className="TitleOnBG">{MyName}</p>
        </div>


    </div>
  );
};


  
  export default MainPage;