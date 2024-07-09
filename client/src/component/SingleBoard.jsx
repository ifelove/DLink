import React from 'react'
import boardImg from "../assets/board.jpg"

const SingleBoard = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl singleboard-container font-bold ">
      <figure>
        <img
          src={boardImg}
          alt="Album"
        />
      </figure>
      <div className="card-body">
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
            Version
          </label>
          <input
            type="text"
            className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
          />
        </div>
        <div className="site-div m-3">
          <label htmlFor="" className="text-2xl">
            Status
          </label>
          <select className="select select-bordered w-full max-w-xs site-input h-14 text-2xl">
            <option>Fixed</option>
            <option>WIP</option>
            <option>Not Repairable</option>
          </select>
        </div>
       
      </div>
    </div>
  );
}

export default SingleBoard
