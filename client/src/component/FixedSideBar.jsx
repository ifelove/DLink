import React from "react";
import Logo from "../assets/logo.svg?react";
import dash from "../assets/dash.png";
import site from "../assets/site1.png";

import ticket1 from "../assets/ticket1.png";
import ticket2 from "../assets/ticket2.png";
import app from "../assets/app.png";
import utilities from "../assets/utilities.png";
import doc from "../assets/docs.png";
import { sidebarData } from "../constant";
import { useDispatch } from "react-redux";
import { setSubSidebarData } from "../utils/reduxToolkit/features/app/appSlice";

const FixedSideBar = () => {
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = React.useState("dashboard");

  const handleLink = (item, active) => {
    dispatch(setSubSidebarData(item));
    setActiveLink(active);
  };

  return (
    <section className="w-24 ">
      <ul className=" bg-base-200 fixed-container">
        <li>
          <a className="ml-auto p-0 m-0">
            <Logo />
          </a>
        </li>
        <div className="divider m-0"></div>

        {sidebarData.map((item, i) => {
  const className = `mb-4 ${item.title === activeLink ? "active-link" : ""}`;
  if (item.title === "dashboard") {
    console.log("yes");
  } else {
    console.log("no");
  }

          return (
            <li
              className={className}
              key={i}
            >
              <a className="tooltip tooltip-right ml-3 " data-tip={item.title}>
                <img
                  src={item.icon}
                  alt={item.icon}
                  className="h-14 w-14"
                  onClick={() => handleLink(item, item.title)}
                />
              </a>
            </li>
          );
        })}

        {/**   <li>
          <a className="tooltip tooltip-right ml-3 mt-3" data-tip="Sites">
            <img src={site} alt="sites" className="h-14 w-14" />
          </a>
        </li>

        <li>
          <a
            className="tooltip tooltip-right ml-3 mt-3"
            data-tip="Spport Ticket"
          >
            <img src={ticket1} alt="ticket" className="h-14 w-14" />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right ml-3 mt-3" data-tip=" Support Ticket">
            <img src={ticket2} alt="ticket" className="h-14 w-14" />
          </a>
        </li>
        <div className="divider m-0"></div>
        <li>
          <a className="tooltip tooltip-right ml-3 mt-3" data-tip="Tool">
            <img src={app} alt="app" className="h-14 w-14" />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right ml-3 mt-3" data-tip="Utilities">
            <img src={utilities} alt="utilities" className="h-14 w-14" />
          </a>
        </li>
        <div className="divider m-0"></div>
        <li>
          <a className="tooltip tooltip-right ml-3 mt-3" data-tip="Docs">
            <img src={doc} alt="doc" className="h-14 w-14" />
          </a>
        </li>*/}
      </ul>
    </section>
  );
};

export default FixedSideBar;
