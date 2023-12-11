import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`} style={{color:props.mode==="light"?"black":"white"}}>
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/" style={{color:props.mode==="light"?"black":"white"}}>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus" style={{color:props.mode==="light"?"black":"white"}}>AboutUs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" style={{color:props.mode==="light"?"black":"white"}}>Editing</Link>
        </li>
      </ul>
    </div>
  </div>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toogle}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toogle</label>
</div>
</nav>
<div style={{ display: "flex",justifyContent: "center",alignItems: "center"}}>

</div>
    </div>
  )
}
