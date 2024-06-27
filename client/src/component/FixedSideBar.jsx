import React from 'react'
import ReactLogo from "../assets/logo.svg?react";
import dash from "../assets/dash.png";
import site from "../assets/site1.png";

import ticket1 from "../assets/ticket1.png";
import ticket2 from "../assets/ticket2.png";
import app from "../assets/app.png";
import utilities from "../assets/utilities.png";
import doc from "../assets/docs.png";



const FixedSideBar = () => {
  return (
    <section className="w-24 h-screen ">
      <ul className=" bg-base-200 h-screen">
        <li>
          <a className="ml-auto p-0 m-0">
            <ReactLogo />
          </a>
        </li>
        <div className="divider m-0"></div>
        <li>
          <a className="tooltip tooltip-right ml-3 " data-tip="Dashboard">
            <img src={dash} alt="dash" className="h-14 w-14" />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right ml-3 mt-3" data-tip="Sites">
            <img src={site} alt="sites" className="h-14 w-14" />
          </a>
        </li>

        <li>
          <a className="tooltip tooltip-right ml-3 mt-3" data-tip="Ticket">
            <img src={ticket1} alt="ticket" className="h-14 w-14" />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right ml-3 mt-3" data-tip="Ticket">
            <img src={ticket2} alt="ticket" className="h-14 w-14" />
          </a>
        </li>
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
        </li>
      </ul>
    </section>
  );
}

export default FixedSideBar
