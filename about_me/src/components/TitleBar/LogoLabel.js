// system
import { useContext } from "react";
import context from "../../context";
import { useEffect, useState ,useMemo, useRef} from "react";

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// CSS
import './LogoLabel.css';




const LogoLabel = (props) => {
  // const { TitleBarMenu } = useContext(context);
  const { BigLabel,SmallLabel } = props;


  return (
    <div className="LogoLabel">
      <a className="BigLabel">{BigLabel}</a>
      <a className="SmallLabel">{SmallLabel}</a>
    </div>
  );
};


  
  export default LogoLabel;