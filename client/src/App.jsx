import React from "react";
import FixedSideBar from "./component/FixedSideBar";
import SideBar from "./component/SideBar";
import NavBar from "./component/NavBar";
import "rsuite/dist/rsuite.min.css";

function App() {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

   const [theme, setTheme] = React.useState("light");

   const toggleTheme = () => {
     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
   };


  return (
    <section className="flex" data-theme={theme}>
      <article>
        <FixedSideBar />
        <SideBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      </article>
      <div className={`main-content ${isCollapsed ? "expanded" : ""}`}>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <section>
          <h1>Welcome to the Collapsible Sidebar Example</h1>
          <p>Here is some main content.</p>
        </section>
      </div>
    </section>
  );
}

export default App;
