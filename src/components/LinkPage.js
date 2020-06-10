import React from "react";


import Learning from '../components/AllPages/learning';
import Workplace from '../components/AllPages/workplace';
import Community from '../components/AllPages/community';
import Personal from '../components/AllPages/personal';

import "./linkpage.css";

function linkpage(props) {
  console.log("props", props.match.params.link);
  switch (props.match.params.link) {
    case 'workplace-links':
      return <Workplace/>;
    case "community-links":
      return <Community/>;
    case "learning-links":
      return <Learning/>
    case "personal-links":
      return <Personal/>
    default:
      return null;
  }

}

export default linkpage;
