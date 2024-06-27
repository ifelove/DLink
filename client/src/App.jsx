import React from "react";
import FixedSideBar from "./component/FixedSideBar";
import SideBar from "./component/SideBar";

function App() {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className="flex">
      <article>
        <FixedSideBar />
        <SideBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      </article>
      <div className={`main-content ${isCollapsed ? "expanded" : ""}`}>
        <h1>Welcome to the Collapsible Sidebar Example</h1>
        <p>Here is some main content.</p>
      </div>
    </section>
  );
}

export default App;
