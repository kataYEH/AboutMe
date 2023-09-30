// system
import { useContext } from "react";
import context from "../../context";
import { useEffect, useState ,useMemo, useRef} from "react";

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// CSS
import './NavBar.css';


// Libary
import SiteNav, {ContentGroup} from 'react-site-nav'



function NavBar() {
  const { MyName,MyNameInEnglish,MyEnglishName } = useContext(context);


  return (
    <div className="NavBar">
      {/* <div className="Logo"></div> */}
      <SiteNav>
          <ContentGroup title={`${MyName} - ${MyNameInEnglish} (${MyEnglishName})`} width="200">

          </ContentGroup>

          <ContentGroup title="About" height="200">
            <ul>
              <li>My Story</li>
              <li>Another list item</li>
            </ul>
          </ContentGroup>
          <ContentGroup title="School" height="200">
            <ul>
              <li>My Story</li>
              <li>Another list item</li>
            </ul>
          </ContentGroup>
        </SiteNav>
      <div className="User">

      </div>
    </div>
  );
};


  
  export default NavBar;