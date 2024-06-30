import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IconBase } from "react-icons/lib";
import { useSelector } from "react-redux";
import Site from "./Site";

const SideBar = ({ isCollapsed, toggleSidebar }) => {
  const { subSidebarData } = useSelector((state) => state.app);

  //console.log(subSidebarData);
  const { title, icon, links } = subSidebarData;

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {isCollapsed ? (
        <IoIosArrowDroprightCircle
          className="expand-icon"
          onClick={toggleSidebar}
        />
      ) : (
        <IoIosArrowDropleftCircle
          className="expand-icon"
          onClick={toggleSidebar}
        />
      )}
      {!isCollapsed && (
        <div>
          {title === "sites" ? (
           <Site/>
          ) : (
            <section>
              {" "}
              <h2 className="flex-sidebar">
                {" "}
                <span>
                  <img src={icon} alt="" className="h-14 w-14" />
                </span>{" "}
                <span className="text-2xl ml-3">{title}</span>
              </h2>
              <div className="divider m-0"></div>
              <div className="pl-6">
                <ul>{
                  links.map((link)=>{
                    const {name}=link
                    return (
                      <li className="text-lg  sidebar-li hover:bg-slate-500">
                        {name}
                      </li>
                    );
                  })
                  
                  }</ul>
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default SideBar;
