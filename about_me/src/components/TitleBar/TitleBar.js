// system
import { useContext } from "react";
import context from "../../context";
import { useEffect, useState ,useMemo, useRef} from "react";

// Libary


// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// CSS
import './TitleBar.css';

// Components
import Menu from "./Menu";
import LogoLabel from "./LogoLabel";
import DropdownButton from "../DropdownButton/DropdownButton";







const TitleBar = (props) => {
  const { MyName,MyNameInEnglish,MyEnglishName } = useContext(context);
  const { TitleBarMenu,Johnny_Icon } = useContext(context);

  console.log(Johnny_Icon)
  return (
    <div className="TitleBar">
      <img src={Johnny_Icon} className="Logo" alt="" />
      <LogoLabel BigLabel={MyName} SmallLabel={MyEnglishName}></LogoLabel>
      <Menu TitleBarMenu={TitleBarMenu}/>
      {/* <FontAwesomeIcon icon="fa-solid fa-phone" className="TitleIcon"/> */}
      {/* <FontAwesomeIcon icon="fa-brands fa-line" className="TitleIcon"/> */}
      {/* <DropdownButton/> */}
    </div>
  );
};


  
  export default TitleBar;