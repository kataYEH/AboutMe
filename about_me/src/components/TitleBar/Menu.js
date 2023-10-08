// system
import { useContext } from "react";
import context from "../../context";
import { useEffect, useState ,useMemo, useRef} from "react";

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// CSS
import './Menu.css';




const Menu = (props) => {
  // const { TitleBarMenu } = useContext(context);
  const { TitleBarMenu } = props;


  return (
    <div className="menu">
      <ol>
        {Object.keys(TitleBarMenu).map((key, index) => (
        typeof TitleBarMenu[key] === 'string'  ? 
        (
          <li key={key} className="menu-item">
            <a href={"#"+TitleBarMenu[key]}>{key}</a>
            </li>
        ) : (
          <li key={key} className="menu-item">
          <a >{key}</a>
          {TitleBarMenu[key] && Object.keys(TitleBarMenu[key]).length > 0 && (
            <ol className="sub-menu">
              {Object.keys(TitleBarMenu[key]).map((subKey) => (
                <li key={subKey} className="menu-item">
                  <a href={"#"+TitleBarMenu[key][subKey]}>{subKey}</a>
                </li>
              ))}
            </ol>
          )}
        </li>

        )


      ))}
        {/* <li className="menu-item"><a href="#0">Home</a></li>
        <li className="menu-item"><a href="#0">About</a></li>
        <li className="menu-item">
          <a href="#0">Widgets</a>
          <ol className="sub-menu">
            <li className="menu-item"><a href="#0">Big Widgets</a></li>
            <li className="menu-item"><a href="#0">Bigger Widgets</a></li>
            <li className="menu-item"><a href="#0">Huge Widgets</a></li>
          </ol>
        </li>
        <li className="menu-item">
          <a href="#0">Kabobs</a>
          <ol className="sub-menu">
            <li className="menu-item"><a href="#0">Shishkabobs</a></li>
            <li className="menu-item"><a href="#0">BBQ kabobs</a></li>
            <li className="menu-item"><a href="#0">Summer kabobs</a></li>
          </ol>
        </li>
        <li className="menu-item"><a href="#0">Contact</a></li> */}
      </ol>
    </div>
  );
};


  
  export default Menu;