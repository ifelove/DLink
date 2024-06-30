import React from "react";
import site from "../assets/site1.png";
import { IoIosArrowDown } from "react-icons/io";
import { Accordion } from "rsuite";

import { siteData } from "../constant";

const Site = () => {
  const LAGOS_REGION = "LAGOS";
  const ABIA_REGION = "ABIA";

  const [searchKey, setSearchKey] = React.useState("Search by Site Id");
  return (
    <section>
      {" "}
      <h2 className="flex-sidebar">
        {" "}
        <span>
          <img src={site} alt="" className="h-14 w-14" />
        </span>{" "}
        <span className="text-2xl ml-3">sites</span>
      </h2>
      <div className="divider m-0"></div>
      <main className="m-2">
        <div className="pb-2 text-2xl flex-site-search-cat">
          <span>
            {/**  <IoIosArrowDown className="cursor-pointer" />*/}
            <select
              className=" select-ghost w-full max-w-xs sele text-lg"
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
            >
              <option className="">Search by Site Id</option>
              <option>Search by Board Id</option>
              <option>Search by Controller SN</option>
            </select>
          </span>
        </div>
        <label className="input input-bordered flex items-center gap-2 ">
          <input
            type="text"
            className="grow text-black "
            placeholder={searchKey}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="black"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </main>
      <Accordion defaultActiveKey={1}>
        <Accordion.Panel
          header={LAGOS_REGION}
          eventKey={1}
          caretAs={IoIosArrowDown}
        >
          <ul className=" h-80 overflow-y-scroll">
            {siteData.map((data, index) => {
              const {
                ControllerID,
                ID,
                Latitude,
                Longitude,
                Name,
                ProjectStatus,
                SerialName,
                SiteStatus,
                SiteType,
              } = data;

              const input = "IHS_ABE_0023B";
              const match = Name.match(/_([A-Z]+)_/);
              const initial = match ? match[1] : null;
              console.log(initial); // Outputs: ABE

              if (initial === "ABE") {
                return (
                  <li className="text-xl p-1 hover:bg-slate-500 rounded-md  cursor-pointer">
                    {Name}
                  </li>
                );
              }
            })}
          </ul>
        </Accordion.Panel>
        <Accordion.Panel
          header={ABIA_REGION}
          eventKey={2}
          caretAs={IoIosArrowDown}
        >
          <ul className=" h-80 overflow-y-scroll ">
            {siteData.map((data, index) => {
              const {
                ControllerID,
                ID,
                Latitude,
                Longitude,
                Name,
                ProjectStatus,
                SerialName,
                SiteStatus,
                SiteType,
              } = data;

              const input = "IHS_ABE_0023B";
              const match = Name.match(/_([A-Z]+)_/);
              const initial = match ? match[1] : null;
              console.log(initial); // Outputs: ABE

              if (initial === "ABI") {
                return (
                  <li className="text-xl p-1 hover:bg-slate-500 rounded-md  cursor-pointer">
                    {Name}
                  </li>
                );
              }
            })}
          </ul>
        </Accordion.Panel>
      </Accordion>
    </section>
  );
};

export default Site;
 