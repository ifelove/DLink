import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IconBase } from "react-icons/lib";
import { useSelector } from "react-redux";

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
          {title==="sites" ?    "hello"    :    <h2>
            {" "}
            <span>
              <img src={icon} alt="" />
            </span>{" "}
            {title}
          </h2>      }
     
        </div>
      )}
    </div>
  );
};

export default SideBar;
