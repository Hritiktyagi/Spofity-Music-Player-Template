import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <>
        {/* <nav className="navbar navbar-expand-lg bg-dark" style={{overflow:"hidden",position:"sticky",top:'0',zIndex:"1",width:"100%"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><i class="fa-brands fa-2x  fa-spotify"></i><span>Spotify</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"  style={{color:"white"}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  style={{color:"white"}}>Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  style={{color:"white"}}>Library</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  style={{color:"white"}}>create</a>
        </li> 
     
      </ul>
    </div>
    <div className="enter">
    <button class="btn btn-success" style={{width:'6rem',marginRight:'1rem'}}>Log In</button>
    <button class="btn btn-success" style={{width:'6rem'}}>Sign Up</button>
    
  </div>
  </div>

</nav> */}

<div class="navbar">
    <div class="header">
      <i class="fa-brands fa-3x  fa-spotify"></i>
      <span class="brand">Spotify</span>
    </div>


    <div class="enter ">
      <button class="btn btn-success" id="btn1"> Sign In </button>
      <button class="btn btn-success" id="btn2">Log In</button>
    </div>

  </div>






      </>
    )
  }
}
