import React from "react";

import CommonPage from "../components/CommonPage/commonpage";

import "./linkpage.css";

function linkpage(props) {
  console.log("props", props.match.params.link);
  switch (props.match.params.link) {
    case "workplace-links":
      return <CommonPage />;
    case "community-links":
      return <CommonPage />;
    case "learning-links":
      return <CommonPage />;
    case "personal-links":
      return <CommonPage />;
    default:
      return null;
  }
}

export default linkpage;
