import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a
          class="btn btn-ghost normal-case text-xl hover:opacity-75 hover:text-white text-yellow-400"
          href="/"
        >
          AniFlix Movie DB
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li className="mr-10 hover:text-white text-yellow-500">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="mr-10 hover:text-white text-yellow-500">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
