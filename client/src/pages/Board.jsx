import React from "react";
import { Modal, ButtonToolbar, Button, Loader, Placeholder } from "rsuite";
import SingleBoard from "../component/SingleBoard";
import ReportBoard from "../component/ReportBoard";

import { useSelector, useDispatch } from "react-redux";
import {
  searchBoards,
  setSingleBoard,
} from "../utils/reduxToolkit/features/board/boardSlice";

const Board = () => {
  const { searchedBoards } = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [viewOrRepair, setViewOrRepair] = React.useState("");

  const [searchId, setSearchId] = React.useState("");
  const handleSeachId = (e) => {
    e.preventDefault();
    setSearchId(e.target.value);
  };

  const handleView_Repaire = (e, board) => {
    console.log(e.target.textContent);
    setViewOrRepair(e.target.textContent);
    handleOpen();
    dispatch(setSingleBoard(board));
  };

  React.useEffect(() => {
    dispatch(searchBoards(searchId));
  }, [searchId]);

  console.log(searchId);
  const handleEntered = (e) => {};

  return (
    <div className="board-container m-20">
      <section className="">
        <h2 className="font-bold text-3xl mb-10"> Board Repair</h2>
      </section>
      <label className="input input-bordered flex items-center gap-2 w-1/3 font-bold text-2xl">
        <input
          type="text"
          className="grow "
          placeholder="Search Board"
          value={searchId}
          onChange={handleSeachId}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-10 w-10 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <main className="w-full mt-20 board-card-container">
        {searchedBoards.map((item) => {
          const { _id, boardId, status, fault_category, version } = item;

          return (
            <div className="card bg-base-100 w-96 shadow-xl" key={_id}>
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {boardId}
                  <div className="badge badge-secondary">{status}</div>
                </h2>

                <div className="card-actions justify-end">
                  <ButtonToolbar>
                    <Button
                      onClick={(e) => {
                        handleView_Repaire(e, item);
                      }}
                    >
                      View
                    </Button>
                  </ButtonToolbar>
                  <ButtonToolbar>
                    <Button
                      onClick={(e) => {
                        handleView_Repaire(e, item);
                      }}
                    >
                      Repair
                    </Button>
                  </ButtonToolbar>
                  <Modal
                    className="new-modal"
                    open={open}
                    onClose={handleClose}
                    onEntered={handleEntered}
                    onExited={() => {
                      setRows(0);
                    }}
                  >
                    <Modal.Header>
                      <Modal.Title>
                        {viewOrRepair == "View" && "Board Details"}
                        {viewOrRepair == "Repair" &&
                          "Report Board After Fixing"}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {viewOrRepair == "View" && <SingleBoard />}
                      {viewOrRepair == "Repair" && <ReportBoard />}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={handleClose} appearance="primary">
                        {viewOrRepair === "View" && "Update Board"}
                        {viewOrRepair === "Repair" && "Report Board"}
                      </Button>
                      <Button onClick={handleClose} appearance="subtle">
                        Cancel
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Board;
