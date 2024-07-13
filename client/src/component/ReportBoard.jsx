import React from "react";
import { useSelector } from "react-redux";

const ReportBoard = () => {
  const report = {};
  const { singleBoard } = useSelector((state) => state.board);
  const { _id, boardId, status, fault_category, version } = singleBoard;

  const [selectFaultCategory, setSelectFaultCategory] =
    React.useState(fault_category);
  const [selectRemark, setSelectRemark] = React.useState("");
  const [comment, setCommment] = React.useState("");
  const [selectFaultCategoryAfter, setSelectFaultCategoryAfter] =
    React.useState("");
  const [selectFaultDescAfter, setSelectFaultDescAfter] = React.useState("");
  const [selectFaultDesc, setSelectFaultDesc] = React.useState("");
  const [componentReplaced, setComponentReplaced] = React.useState("");

  const handleComment = (e) => {
    setCommment(e.target.value);
  };

  const handleFaultSelected = (e) => {
    setSelectFaultCategory(e.target.value);
  };

  const handleFaultAfterSelected = (e) => {
    setSelectFaultCategoryAfter(e.target.value);
  };
  const handleFaultDescAfterSelected = (e) => {
    setSelectFaultDescAfter(e.target.value);
  };
  const handleFaultDesc = (e) => {
    setSelectFaultDesc(e.target.value);
  };
  const handleRemarkSelected = (e) => {
    setSelectRemark(e.target.value);
  };

  report.comment = comment;
  report.remark = selectRemark;
  report.fault_category = selectFaultCategory;
  report.boardId = boardId;
  report.version = version;
  report.fault_categoryAfter = selectFaultCategoryAfter;
  report.fault_category = selectFaultCategory;
  report.faultDesc = selectFaultDesc;
  report.faultDescAfter = selectFaultDescAfter;
  report.componentReplaced = componentReplaced;

  console.log("report", report);

  return (
    <div className="font-bold board-report-container">
      <article>
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
            Fault Category
          </label>
          <select
            className="select select-bordered w-full max-w-xs site-input h-14 text-2xl "
            value={selectFaultCategory}
            onChange={handleFaultSelected}
          >
            <option>Modbus Issue</option>
            <option>Power Issue</option>
            <option>PRM Issue</option>
            <option>Good On Arrival</option>
            <option>DI Alarming Issue</option>
            <option>Physical Damage</option>

            <option>Login Issue</option>
            <option>Upgrade Issue</option>

            <option>Microchip Issue</option>
            <option>Vbat Issue</option>
          </select>
        </div>
        <div className="site-div m-3">
          <label htmlFor="" className="text-2xl">
            Fault Description
          </label>
          <select
            className="select select-bordered w-full max-w-xs site-input h-14 text-2xl"
            onChange={handleFaultDesc}
          >
            <option>Select Faulty Description</option>
            <option>D43&D44 permanently off</option>
            <option>Modbus not working</option>
            <option>Board not Powering</option>
            <option>Good On Arrival</option>
            <option>Digital Inputs alarming </option>
            <option>Board physically burnt</option>
            <option>Board tripping off power</option>

            <option>Not loging in</option>
            <option>Not accepting upgrade</option>
            <option>Borard vandalized</option>
            <option>Board damaged by water</option>

            <option>J606 vandalized</option>
            <option>D57 permanently off</option>
            <option>Not Repairable</option>
            <option>Vbat Port faulty</option>
            <option>Board Not Communicating</option>
            <option>D43&D44 Freeze</option>
          </select>
        </div>
        <div className="site-div m-3">
          <label htmlFor="" className="text-2xl">
            Add Comment
          </label>
          <textarea
            type="text"
            className="input input-bordered input-sm w-full max-w-xs site-input h-48 text-lg"
            value={comment}
            onChange={handleComment}
          />
        </div>
        <div className="site-div m-3">
          <label htmlFor="" className="text-2xl">
            Component Changed
          </label>
          <input
            type="text"
            className="input input-bordered input-sm w-full max-w-xs site-input h-14 text-2xl"
            value={componentReplaced}
            onChange={(e) => setComponentReplaced(e.target.value)}
          />
        </div>
      </article>

      <article>
        <div className="site-div m-3">
          <label htmlFor="" className="text-2xl">
            Category After Fixing
          </label>
          <select
            className="select select-bordered w-full max-w-xs site-input h-14 text-2xl"
            onChange={handleFaultAfterSelected}
          >
            <option>Select Category</option>
            <option>Fixed</option>

            <option>Modbus Issue</option>
            <option>Power Issue</option>
            <option>PRM Issue</option>
            <option>Good On Arrival</option>
            <option>DI Alarming Issue</option>
            <option>Physical Damage</option>

            <option>Login Issue</option>
            <option>Upgrade Issue</option>

            <option>Microchip Issue</option>
            <option>Vbat Issue</option>
          </select>
        </div>
        <div className="site-div m-3">
          <label htmlFor="" className="text-2xl">
            Fault Description After Fixing
          </label>
          <select
            className="select select-bordered w-full max-w-xs site-input h-14 text-2xl"
            onChange={handleFaultDescAfterSelected}
          >
            <option>Select Fix Description</option>
            <option>Fixed</option>
            <option>D43&D44 permanently off</option>
            <option>Modbus not working</option>
            <option>Board not Powering</option>
            <option>Good On Arrival</option>
            <option>Digital Inputs alarming </option>
            <option>Board physically burnt</option>
            <option>Board tripping off power</option>

            <option>Not loging in</option>
            <option>Not accepting upgrade</option>
            <option>Borard vandalized</option>
            <option>Board damaged by water</option>

            <option>J606 vandalized</option>
            <option>D57 permanently off</option>
            <option>Not Repairable</option>
            <option>Vbat Port faulty</option>
            <option>Board Not Communicating</option>
            <option>D43&D44 Freeze</option>
          </select>
        </div>
        <div className="site-div m-3">
          <label htmlFor="" className="text-2xl">
            Remark
          </label>
          <select
            className="select select-bordered w-full max-w-xs site-input h-14 text-2xl"
            onChange={handleRemarkSelected}
          >
            <option>Select Remark</option>
            <option>Fixed</option>
            <option>WIP</option>
            <option>Not Fixed</option>
          </select>
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
      </article>
    </div>
  );
};

export default ReportBoard;
