import React, { useState } from 'react'

export default function Navbar(props) {
    
    let[mode,setMode]=useState("")
    let ChangeMode = () => {
        if (mode === "") {
            setMode("dark"); // Corrected: Invoke setMode with the new value
        } else {
            setMode("");
        }
    }
  return (
    <><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.headName}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        
        <div className="form-check form-switch">
  <input className="form-check-input"onClick={ChangeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <i className={`fa-solid fa-${mode==="dark"?"sun":"moon"}`}></i>
</div>
      </div>
    </div>
  </nav>
    </>
  )
}
