import React from "react";
// import { NavLink } from "react-router-dom";


export default function Navbar(props) {

    function colorRed(){
        document.body.style.backgroundColor = 'red'
    }
    function colorGreen(){
        document.body.style.backgroundColor = 'green'
    }
    function colorGrey(){
        document.body.style.backgroundColor = 'grey'
    }
    
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                {props.link1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                {props.link2}
                </a>
              </li>
            </ul>
            <div className="red" onClick={colorRed}></div>
            <div className="green ms-3 me-3" onClick={colorGreen}></div>
            <div className="grey me-3" onClick={colorGrey}></div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className={`form-check-label text-${props.mode === 'light' ? "dark": "light"}`} htmlFor="flexSwitchCheckDefault">
                {props.swname}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}



Navbar.defaultProps = {
    title : 'Pls Give Title',
    link1 : "Home",
    link2 : "About",
}