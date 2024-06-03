import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userLogo from "../../../assets/momen.jpg";
import { AuthContext } from "../../../providers/AuthProvider";
import ActiveLink from "../../../ActiveLink/ActiveLink";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result = () => {}))
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <li className="font-bold text-gray-600">
        {" "}
        <ActiveLink to="add-project">Add-Project</ActiveLink>{" "}
      </li>
      <li className="font-bold text-gray-600">
        {" "}
        <ActiveLink to="delete-project">Delete-Project</ActiveLink>{" "}
      </li>
      <li className="font-bold text-gray-600">
        {" "}
        <ActiveLink to="/add-blog">Add-Blog</ActiveLink>{" "}
      </li>
      <li className="font-bold text-gray-600">
        {" "}
        <ActiveLink to="/delete-blog">Delete-Blog</ActiveLink>{" "}
      </li>

      {user ? (
        <li>
          {" "}
          <button
            onClick={handleLogOut}
            className="font-semibold text-gray-600"
          >
            Log-Out
          </button>{" "}
        </li>
      ) : (
        <li className="font-semibold text-gray-600">
          {" "}
          <ActiveLink to="/">Log In</ActiveLink>{" "}
        </li>
      )}
    </>
  );
  return (
    <div className="border-b navbar text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="bg-gray-600 btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 text-black bg-gray-200 shadow menu menu-compact dropdown-content rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>

        <Link>
          <h1 className="text-4xl font-semibold text-red-500">Dashboard</h1>
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <img className="w-[60px] rounded-full border-2" src={userLogo} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
