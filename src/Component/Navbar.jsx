import React, { useState } from "react";

const Navbar = ({val , setval}) => {

  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <div className="container">
        <a className="navbar-brand text-success" href="/">phones store</a>
          <form className="d-flex" role="search">
            <input
              className="form-control mx-2"
              type="search"
              placeholder="بحث"
              value={val}
              onChange={e=> setval(e.target.value)}
            />
            <button className="btn btn-outline-success">بحث</button>
          </form>
      </div>
    </nav>
  );
};

export default Navbar;
