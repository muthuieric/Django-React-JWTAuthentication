import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../reducer/Actions";

const Navbar = ({ logout, isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary p-3 ">
      <div className="container mx-auto flex justify-between items-center ">
        <Link className="text-white text-xl font-bold" to="/">
          VMS
        </Link>
        <div className="flex items-center   ">
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center  `}
          >
      <ul className="flex flex-col lg:flex-row items-center absolute lg:relative left-0 bg-primary top-14 lg:top-0 w-full">
  {isAuthenticated ? (
    <>
      <li className="mb-2">
        <Link
          className="text-white block md:inline-block md:mr-4 text-lg font-medium bold hover:underline"
          to="/example/"
          activeClassName="font-bold"
          onClick={toggleNavbar}
        >
          Example
        </Link>
      </li>
      <li className="mb-2">
        <Link
          className="text-white block md:inline-block md:mr-4 text-lg font-medium bold hover:underline"
          to="/imagine/"
          activeClassName="font-bold"
          onClick={toggleNavbar}
        >
          Imagine
        </Link>
      </li>
      <li className="mb-2">
        <Link
          className="text-white block md:inline-block md:mr-4 text-lg font-medium bold hover:underline"
          to="/change/password/"
          activeClassName="font-bold"
          onClick={toggleNavbar}
        >
          Change Password
        </Link>
      </li>
      <li className="mb-2">
        <span
          className="text-white block md:inline-block md:mr-4 text-lg font-medium bold hover:underline"
          onClick={() => {
            logout();
            toggleNavbar();
          }}
          id="logout"
        >
          Logout
        </span>
      </li>
    </>
  ) : (
    <>
      <li className="mb-2">
        <Link
          className="text-white block md:inline-block md:mr-4 text-lg font-medium bold hover:underline"
          to="/"
          activeClassName="font-bold"
          onClick={toggleNavbar}
        >
          Home
        </Link>
      </li>
      <li className="mb-2">
        <Link
          className="text-white block md:inline-block md:mr-4 text-lg font-medium bold hover:underline  "
          to="/login/"
          activeClassName="font-bold"
          onClick={toggleNavbar}
        >
          Login
        </Link>
      </li>
      <li className="mb-2">
        <Link
          className="text-white block md:inline-block md:mr-4 text-lg font-medium bold hover:underline"
          to="/signup/"
          activeClassName="font-bold"
          onClick={toggleNavbar}
        >
          Signup
        </Link>
      </li>
    </>
  )}
</ul>

          </div>
          <button
            className="lg:hidden text-white"
            type="button"
            onClick={toggleNavbar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.AuthReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
