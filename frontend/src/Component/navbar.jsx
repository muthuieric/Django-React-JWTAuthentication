import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../reducer/Actions";

const Navbar = ({ logout, isAuthenticated }) => {
  return (
    <nav className="bg-primary">
      <div className="container mx-auto">
        <Link className="text-white text-xl font-bold" to="/">
          VMS
        </Link>
        <button
          className="lg:hidden px-2 py-1 text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="hidden lg:flex lg:items-center lg:ml-auto">
          <ul className="flex space-x-4">
            <li>
              <Link
                className="text-white"
                to="/"
                activeClassName="font-bold"
              >
                Home
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    className="text-white"
                    to="/change/password/"
                    activeClassName="font-bold"
                  >
                    Change Password
                  </Link>
                </li>
                <li>
                  <span
                    className="text-white cursor-pointer"
                    onClick={logout}
                    id="logout"
                  >
                    Logout
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="text-white"
                    to="/login/"
                    activeClassName="font-bold"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white"
                    to="/signup/"
                    activeClassName="font-bold"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
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
