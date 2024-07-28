import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className=" hidden sm:flex flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="sm:flex-none flex flex-1 gap-2 ">
          <div className="form-control flex-1">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered "
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
