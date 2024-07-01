import React from "react";
import FixedSideBar from "./component/FixedSideBar";
import SideBar from "./component/SideBar";
import NavBar from "./component/NavBar";
import "rsuite/dist/rsuite.min.css";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteFeature from "./pages/SiteFeature";

function App() {
  const { theme } = useSelector((state) => state.app);
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // const [theme, setTheme] = React.useState("light");

 

  return (
    <section className="flex" data-theme={theme}>
      <article>
        <FixedSideBar />
        <SideBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      </article>
      <div className={`main-content ${isCollapsed ? "expanded" : ""}`}>
        <NavBar />
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element="dashboard"></Route>

              <Route path="/sites" Component={SiteFeature}></Route>
              <Route path="/tool" element="tools"></Route>
              <Route path="/error" element="Error"></Route>
              <Route path="*" element="Not found"></Route>
            </Routes>
          </BrowserRouter>
        </>
      </div>
    </section>
  );
}

export default App;
