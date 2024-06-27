import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const SideBar = ({ isCollapsed, toggleSidebar }) => {
 

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
      {!isCollapsed && <div>Hello</div>}
    </div>
  );
};

export default SideBar;
