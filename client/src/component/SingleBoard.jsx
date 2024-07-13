import React from "react";
import boardImg from "../assets/board.jpg";
import { useSelector } from "react-redux";

const SingleBoard = () => {
  const { singleBoard } = useSelector((state) => state.board);
  const { _id, boardId, status, fault_category, version,presentLocation } = singleBoard;
  const [pryId, setPryId] = React.useState(boardId);

  const [selectedStatus,setSelectedStatus]=React.useState(status)

  const handleStatusSelected=(e)=>{
    setSelectedStatus(e.target.value)
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl singleboard-container font-bold ">
      <figure>
        <img src={boardImg} alt="Album" />
      </figure>
      <div className="card-body">
        <div className="site-div m-3">
          <label htmlFor="" className="text-2xl">
            Board ID
          </label>
          <input
            type="text"
            className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            value={boardId}
          />
        </div>
        <div className="site-div m-3">
          <label htmlFor="" className="text-2xl">
            Version
          </label>
          <input
            type="text"
            className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            value={version}
          />
        </div>
        <div className="site-div m-3">
          <label htmlFor="" className="text-2xl">
            Present Location
          </label>
          <input
            type="text"
            className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            value={presentLocation}
          />
        </div>
        <div className="site-div m-3">
          <label htmlFor="" className="text-2xl">
            Status
          </label>
          <select
            className="select select-bordered w-full max-w-xs site-input h-14 text-2xl"
            value={selectedStatus}
            onChange={handleStatusSelected}
          >
            <option value="fixed">Fixed</option>
            <option value="not fixed">Not Fixed</option>
            <option value="not repairable">Not Repairable</option>
            <option value="wip">WIP</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SingleBoard;
