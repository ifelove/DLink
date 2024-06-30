import React from "react";
import { Tooltip } from "rsuite";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../utils/reduxToolkit/features/app/appSlice";

import {
  MdDarkMode,
  MdLightMode,
  MdOutlineNotifications,
} from "react-icons/md";
import { Badge, Button } from "rsuite";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Tools</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="mr-5" title="Theme">
              <MdDarkMode
                className="i alert "
                onClick={() => {
                  dispatch(toggleTheme());
                }}
              />
            </li>

            <li className=" " title="Noticification">
              <Badge content={0}>
                <MdOutlineNotifications className="i alert rounded-md" />
              </Badge>
            </li>
          </ul>
          <div className="divider lg:divider-horizontal"></div>
          <article className="user-nav  mr-4">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-12 rounded-full">
                <span className="text-2xl font-bold">A</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold ml-2"> Adeola</h2>
            <IoIosArrowDown className="text-2xl cursor-pointer" />
          </article>
        </div>
      </div>
      <div style={{ height: 0 }} className="nav-tooltip">
        <Tooltip visible>Noticification</Tooltip>
      </div>
      <div style={{ height: 0 }} className="nav-tooltip">
        <Tooltip visible>Theme</Tooltip>
      </div>
    </>
  );
};

export default NavBar;
