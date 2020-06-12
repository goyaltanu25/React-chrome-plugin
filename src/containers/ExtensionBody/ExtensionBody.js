import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { BsThreeDotsVertical, BsPersonPlusFill } from "react-icons/bs";
import { MdWork, MdSchool } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default class ExtensionBody extends Component {
  render() {
    return (
      <>
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
            to="/workplace-links"
            onClick={(event) => this.openNewTab(event, "/workplace-links")}
          >
            <MdWork />
          </NavLink>
          <NavLink
            className="button"
            to="/community-links"
            onClick={(event) => this.openNewTab(event, "/community-links")}
          >
            <FaHandsHelping />
          </NavLink>
          <NavLink
            className="button"
            to="/learning-links"
            onClick={(event) => this.openNewTab(event, "/learning-links")}
          >
            <MdSchool />
          </NavLink>
          <NavLink
            className="button"
            to="/personal-links"
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
      </>
    );
  }
}
