import React from "react";
import { Modal, ButtonToolbar, Button, Loader, Placeholder } from "rsuite";
import SingleBoard from "../component/SingleBoard";

const Board = () => {
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEntered = () => {
   console.log("hello")
  };

  return (
    <div className="board-container m-20">
      <section className="">
        <h2 className="font-bold text-3xl mb-10"> Board Repair</h2>
      </section>
      <label className="input input-bordered flex items-center gap-2 w-1/3 font-bold text-2xl">
        <input type="text" className="grow " placeholder="Search Board" />
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
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              LU45
              <div className="badge badge-secondary">Fixed</div>
            </h2>

            <div className="card-actions justify-end">
              <div className="badge badge-outline cursor-pointer">View</div>
              <div className="badge badge-outline cursor-pointer">Repair</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              LU45
              <div className="badge badge-secondary">Fixed</div>
            </h2>

            <div className="card-actions justify-end">
              <ButtonToolbar>
                <Button onClick={handleOpen}>View</Button>
              </ButtonToolbar>
              <ButtonToolbar>
                <Button onClick={handleOpen}>Repair</Button>
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
                  <Modal.Title>Repair</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {1==1 ? (
                 <SingleBoard/>
                  ) : (
                    <div style={{ textAlign: "center" }}>
                      <Loader size="md" />
                    </div>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleClose} appearance="primary">
                    Repair and Report
                  </Button>
                  <Button onClick={handleClose} appearance="subtle">
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              LU45
              <div className="badge badge-secondary">Fixed</div>
            </h2>

            <div className="card-actions justify-end">
              <div
                className="badge badge-outline cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                View
              </div>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Click the button below to close</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              <div className="badge badge-outline cursor-pointer">Repair</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              LU45
              <div className="badge badge-secondary">Fixed</div>
            </h2>

            <div className="card-actions justify-end">
              <div className="badge badge-outline cursor-pointer">View</div>
              <div className="badge badge-outline cursor-pointer">Repair</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              LU45
              <div className="badge badge-secondary">Fixed</div>
            </h2>

            <div className="card-actions justify-end">
              <div className="badge badge-outline cursor-pointer">View</div>
              <div className="badge badge-outline cursor-pointer">Repair</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Board;
