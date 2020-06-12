import React from "react";
import ReactDom from 'react-dom'
// import { NavLink, Link } from "react-router-dom";

// import { BsThreeDotsVertical, BsPersonPlusFill } from "react-icons/bs";
// import { MdWork, MdSchool } from "react-icons/md";
// import { FaHandsHelping} from "react-icons/fa";
// import { GiSelfLove } from "react-icons/gi";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import Container from "react-bootstrap/Container";

// import NavLinkPage from "../../../components/NavLinkPage";
// import Profile from "../../../containers/Profile/Profile";
// import NewProfilePortalModal from "../NewProfileModal/NewProfilePortal";


const ExtensionContainer = (props) => {
  return ReactDom.createPortal(
    <div
      style={{
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={props.onClose}
    >
      <div
        style={{
          minWidth: "400px",
        }}
      >
        {props.children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};


export default ExtensionContainer;

