import React from "react";

const SiteFeature = () => {
  const links = ["Overview", "Controller", "Components", "Alert", "Navigation"];
  const [activeLink, setActiveLink] = React.useState("Controller");

  const handleLink = (active) => {
    setActiveLink(active);
  };

  return (
    <section className="">
      <div className=" opacity-4 site-nav m-12 mb-7 rounded-xl ">
        {links.map((link, index) => {
          const className = `site-nav-link text-xl font-bold cursor-pointer ${
            link === activeLink ? "active" : ""
          }`;

          return (
            <h2
              className={className}
              key={index}
              onClick={() => handleLink(link)}
            >
              {link}
            </h2>
          );
        })}

        {/**  <h2 className="site-nav-link text-xl font-bold cursor-pointer active">
          Overview
        </h2>
        <h2 className="site-nav-link text-xl font-bold cursor-pointer">
          {" "}
          Controller
        </h2>
        <h2 className="site-nav-link text-xl font-bold cursor-pointer ">
          {" "}
          Components
        </h2>
        <h2 className="site-nav-link text-xl font-bold cursor-pointer ">
          {" "}
          Alert
        </h2>
        <h2 className="site-nav-link text-xl font-bold cursor-pointer">
          Navigation to Site
        </h2>*/}
      </div>

      <div className="site-main">
        <h2 className="site-main-header ml-10 text-2xl ">IHS_LAG_0006A {activeLink}</h2>
        {/**/}

        <article
          className={`${
            activeLink === "Overview" ? "form-article active" : "form-article"
          }`}
        >
          <div className="site-div m-3">
            <label htmlFor="" className="text-2xl">
              Site ID
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            />
          </div>
          <div className="site-div m-3">
            <label htmlFor="" className="text-2xl">
              Address
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            />
          </div>
          <div className="site-div m-3">
            <label htmlFor="" className="text-2xl">
              Latitude
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            />
          </div>
          <div className="site-div m-3">
            <label htmlFor="" className="text-2xl">
              Longitude
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            />
          </div>
          <div className="site-div m-3">
            <label htmlFor="" className="text-2xl">
              Region
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            />
          </div>
          <div className="site-div m-3">
            <label htmlFor="" className="text-2xl">
              State
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            />
          </div>
          <div className="site-div m-3">
            <label htmlFor="" className="text-2xl">
              Site Structure
            </label>
            <select className="select select-bordered w-full max-w-xs site-input h-14 text-2xl">
              <option>Outdoor</option>
              <option>Indoor</option>
            </select>
          </div>
        </article>
        <article
          className={`${
            activeLink === "Controller" ? "form-article active" : "form-article"
          }`}
        >
          <div className="site-div m-3">
            <label htmlFor="" className="text-2xl">
              Controller S/N
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            />
          </div>
          <div className="site-div m-3">
            <label htmlFor="" className="text-2xl">
              Board ID
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            />
          </div>
          <div className="site-div m-3">
            <label htmlFor="" className="text-2xl">
              Sec Board ID
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            />
          </div>
          <div className="site-div m-3">
            <label htmlFor="" className="text-2xl">
              Type
            </label>
            <select className="select select-bordered w-full max-w-xs site-input h-14 text-2xl">
              <option>Plastic Controller</option>
              <option> 2U Controller</option>
            </select>
          </div>
          <div className="site-div m-3">
            <label htmlFor="" className="text-2xl">
              Version
            </label>
            <select className="select select-bordered w-full max-w-xs site-input h-14 text-2xl">
              <option>Version 8</option>
              <option>Version 7</option>
            </select>
          </div>
        </article>

        <article
          className={`${
            activeLink === "Components" ? "form-article active" : "form-article"
          }`}
        >
          <div className="site-div m-3 ">
            <label htmlFor="" className="text-2xl w-96">
              Select Component
            </label>
            <select className="select select-bordered w-full max-w-xs site-input h-14 text-2xl">
              <option>R Card</option>
              <option>A Card</option>
              <option>Fuel Sensor</option>
              <option>Router</option>
              <option>ACEM</option>
              <option>Camera</option>
            </select>
          </div>
         

          <div className="card-list ">
            <div className="card bg-base-100 w-96 shadow-xl ml-4 mt-2">
              <div className="card-body p-0">
                <div className="pl-20">
                  <h2 className="card-title">R Card S/N : 00064</h2>
                  <h2 className="card-title">Version : Version 7</h2>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Replace</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl ml-4 mt-2">
              <div className="card-body p-0">
                <div className="pl-20">
                  <h2 className="card-title">R Card S/N : 00064</h2>
                  <h2 className="card-title">Version : Version 7</h2>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Replace</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl ml-4 mt-2">
              <div className="card-body p-0">
                <div className="pl-20">
                  <h2 className="card-title">R Card S/N : 00064</h2>
                  <h2 className="card-title">Version : Version 7</h2>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Replace</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl ml-4 mt-2">
              <div className="card-body p-0">
                <div className="pl-20">
                  <h2 className="card-title">R Card S/N : 00064</h2>
                  <h2 className="card-title">Version : Version 7</h2>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Replace</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl ml-4 mt-2">
              <div className="card-body p-0">
                <div className="pl-20">
                  <h2 className="card-title">R Card S/N : 00064</h2>
                  <h2 className="card-title">Version : Version 7</h2>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Replace</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl ml-4 mt-2">
              <div className="card-body p-0">
                <div className="pl-20">
                  <h2 className="card-title">R Card S/N : 00064</h2>
                  <h2 className="card-title">Version : Version 7</h2>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Replace</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl ml-4 mt-2">
              <div className="card-body p-0">
                <div className="pl-20">
                  <h2 className="card-title">R Card S/N : 00064</h2>
                  <h2 className="card-title">Version : Version 7</h2>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Replace</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl ml-4 mt-2">
              <div className="card-body p-0">
                <div className="pl-20">
                  <h2 className="card-title">R Card S/N : 00064</h2>
                  <h2 className="card-title">Version : Version 7</h2>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Replace</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl ml-4 mt-2">
              <div className="card-body p-0">
                <div className="pl-20">
                  <h2 className="card-title">R Card S/N : 00064</h2>
                  <h2 className="card-title">Version : Version 7</h2>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Replace</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/**<div type="checkbox" aria-label="Checkbox" className="btn">
          Update



        </div> */}

        {activeLink === "Overview" && (
          <div type="checkbox" aria-label="Checkbox" className="btn">
            Update
          </div>
        )}

        {activeLink === "Controller" && (
          <div type="checkbox" aria-label="Checkbox" className="btn">
            Replace Controller
          </div>
        )}
      </div>
    </section>
  );
};

export default SiteFeature;
