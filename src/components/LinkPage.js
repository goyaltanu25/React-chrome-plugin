import React from "react";

import CommonPage from "../components/CommonPage/commonpage";

import "./linkpage.css";

function Linkpage(props) {
  console.log("props", props.match.params.link);
  switch (props.match.params.link) {
    case "posts":
      return <CommonPage listname={'Your Posts'}/>;
    case "collections":
      return <CommonPage listname={'Your Collections'}/>;
    default:
      return null;
  }
}

export default Linkpage;
