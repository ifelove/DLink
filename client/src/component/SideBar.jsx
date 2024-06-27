import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const SideBar = () => {
const [isCollapsed, setIsCollapsed] = React.useState(true);
const toggleSidebar = () => {}


  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        
      <button onClick={toggleSidebar} className="toggle-btn">
        {isCollapsed ? "Expand" : "Collapse"}
      </button>
      {!isCollapsed && (
        <div>
         Hello
        </div>
      )}
    </div>
  );
}

export default SideBar
