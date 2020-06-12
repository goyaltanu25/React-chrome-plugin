import React from "react";
import { NavLink, Link } from "react-router-dom";

import { BsThreeDotsVertical, BsPersonPlusFill } from "react-icons/bs";
import { MdWork, MdSchool } from "react-icons/md";
import { FaHandsHelping} from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import Container from "react-bootstrap/Container";

// import NavLinkPage from "../../../components/NavLinkPage";
// import Profile from "../../../containers/Profile/Profile";
// import NewProfilePortalModal from "../NewProfileModal/NewProfilePortal";


class ExtensionContainer extends React.Component {
  openNewTab(event, route) {
    // console.log(event, route)
    event.preventDefault();
    window.open(route);
  }
  render() {
    return (
      <div className="nav">
        <NavLink
          className="button"
          to="/profile"
          onClick={(event) => this.openNewTab(event, "/profile")}
        >
          <BsThreeDotsVertical />
        </NavLink>
        <NavLink
          className="button"
          to="/workplace-NavLinks"
          onClick={(event) => this.openNewTab(event, "/workplace-links")}
        >
          <MdWork />
        </NavLink>
        <NavLink
          className="button"
          to="/community-NavLinks"
          onClick={(event) => this.openNewTab(event, "/community-links")}
        >
          <FaHandsHelping />
        </NavLink>
        <NavLink
          className="button"
          to="/learning-NavLinks"
          onClick={(event) => this.openNewTab(event, "/learning-links")}
        >
          <MdSchool />
        </NavLink>
        <NavLink
          className="button"
          to="/personal-NavLinks"
          onClick={(event) => this.openNewTab(event, "/personal-links")}
        >
          <GiSelfLove />
        </NavLink>
        <NavLink
          className="button"
          to="/add-new-profile"
          onClick={(event) => this.openNewTab(event, "/add-new-profile")}
        >
          <BsPersonPlusFill />
        </NavLink>
        <NavLink to="#" className="button">
          <AiOutlineCloseCircle />
        </NavLink>
    
        
      </div>
    );
  }
}

export default ExtensionContainer;

// const ExtensionContainer = (props) => {
//   return ReactDom.createPortal(
//     <div
//       style={{
//         top: "0",
//         bottom: "0",
//         left: "0",
//         right: "0",
//         display: "grid",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//       onClick={props.onClose}
//     >
//       <div
//         style={{
//           minWidth: "400px",
//         }}
//       >
//         {props.children}
//       </div>
//     </div>,
//     document.getElementById("portal-root")
//   );
// };
