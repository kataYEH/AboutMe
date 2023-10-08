// system
import { useContext } from "react";
import context from "../../context";
import { useEffect, useState ,useMemo, useRef} from "react";

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// CSS
import './DropdownButton.css';




const DropdownButton = (props) => {
  // const { TitleBarMenu } = useContext(context);
  const { BigLabel,SmallLabel } = props;


  return (
    <details className="dropdown">
        <summary className="DropdownButton">
            <FontAwesomeIcon icon="fa-solid fa-phone" className="DropdownIcon"/>
            <a className="DropdownBTLabel"></a>
        </summary>
        <ul className="DropdownButtonUL">
            <li><FontAwesomeIcon icon="fa-brands fa-line" className="DropdownButtonLiIcon Line"/><a href="#">LineID: alone101112</a></li>
            <li><FontAwesomeIcon icon="fa-brands fa-weixin" className="DropdownButtonLiIcon Weixin"/><a href="#">Weixin: kata_YEH</a></li>
            <li><FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" className="DropdownButtonLiIcon"/><a href="#">0912484724</a></li>
            <li><FontAwesomeIcon icon="fa-solid fa-envelope" className="DropdownButtonLiIcon "/><a href="#">xxszcvfh@gamil.com</a></li>
        </ul>
    </details>

  );
};


  
  export default DropdownButton;