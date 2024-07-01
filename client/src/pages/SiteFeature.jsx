import React from 'react'



const SiteFeature = () => {

   

  return (
    <section >
      <div className=" opacity-4 site-nav m-12 rounded-xl">
        <h2 className="site-nav-link text-xl font-bold cursor-pointer active">
          Overview
        </h2>
        <h2 className="site-nav-link text-xl font-bold cursor-pointer">
          {" "}
          Site Controller
        </h2>
        <h2 className="site-nav-link text-xl font-bold cursor-pointer active">
          {" "}
          Site Components
        </h2>
        <h2 className="site-nav-link text-xl font-bold cursor-pointer">
          Navigation to Site
        </h2>
      </div>
    </section>
  );
}

export default SiteFeature
