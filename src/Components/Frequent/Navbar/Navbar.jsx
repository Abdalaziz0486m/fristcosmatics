import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Images/logo192.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <img src={Logo} alt="frist cosmatics" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-wrap "
            dir="rtl"
            id="navbarSupportedContent"
          >
            <form
              className="d-xxl-flex d-xl-flex d-lg-flex d-md-none mb-3 me-3 w-100"
              role="search"
            >
              <button className="btn" type="submit">
                Search
                <i className="fa-solid fa-magnifying-glass me-2 fa-xl "></i>
              </button>
            </form>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="/ourproducts"
                >
                  Our Products
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/ourproducts">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/ourbisnises"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Business
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/ourbisnises">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={"/home"}
                >
                  Home
                </NavLink>
              </li>
            </ul>

            <form
              className="d-xxl-none d-xl-none d-lg-none d-md-flex mb-3 me-5 w-100"
              role="search"
            >
              <button className="btn" type="submit">
                Search
                <i className="fa-solid fa-magnifying-glass me-2 fa-xl "></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
