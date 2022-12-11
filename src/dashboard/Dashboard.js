import { play } from 'fontawesome';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../dashboard/play.js';
export default class Dashboard extends Component {


  render() {
    return (
      <>
        <div className="container-fluid" style={{ background: "#333" }} >
          <div className="row">
            <div class="col-md-2 sidenav">
              <ul>
              
                <Link className="nav-link" to="/"> <i class="fa-sharp fa-solid fa-house"></i><li> Home</li></Link> &nbsp;
                <Link className="nav-link" to="/search"> <i class="fa-sharp fa-solid fa-search"></i><li> Search</li></Link> &nbsp;
                <Link className="nav-link" to="/library"> <i class="fa-solid fa-bookmark"></i><li> Library</li></Link> &nbsp;
            
                <Link className="nav-link" to="/liked">  <i class="fa-solid fa-heart"></i><li> Liked</li></Link> &nbsp;
               
              
               
              </ul>
              <ul>
                <div><i class="fa-solid fa-folder-plus"></i>
                  <li>Create Playlist</li>
                </div>&nbsp;
                <div><i class="fa-solid fa-heart"></i>
                  <li>Liked Songs</li>
                </div>
              </ul>
            </div>

            <div className="col-md-10 main">
              <div className="row">
                <label className='heading'>Today's Top Hits</label>
                <div className="input-group" sty>
                  <input type="search" className="form-control rounded" placeholder="What do you want to listen to ?" aria-label="Search" aria-describedby="search-addon" style={{ maxWidth: "40%" }} />
                </div>

                <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }} >
                  <img className="card-img-top" src="pic1.png.jpeg" alt="Card image cap" onClick={play} />
                  <div className="card-body">
                    <h5 className="card-title">Today's Top Hits</h5>
                    <p className="card-text">Babbu Maan is top at all playlist.</p>

                  </div>
                </div>
                <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }} >
                  <img className="card-img-top" src="pic2.png.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Today's Top Hits</h5>
                    <p className="card-text">Babbu Maan is top at all playlist.</p>

                  </div>
                </div>
                <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }} >
                  <img className="card-img-top" src="pic3.png.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Today's Top Hits</h5>
                    <p className="card-text">Babbu Maan is top at all playlist.</p>

                  </div>
                </div>
                <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                  <img className="card-img-top" src="pic4.png.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Today's Top Hits</h5>
                    <p className="card-text">Babbu Maan is top at all playlist.</p>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                  <img className="card-img-top" src="pic5.png.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Today's Top Hits</h5>
                    <p className="card-text">Karan Aujala is top at all playlist.</p>

                  </div>
                </div>
                <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                  <img className="card-img-top" src="pic6.png.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">TAKKAR</h5>
                    <p className="card-text">By Varinder Brar</p>

                  </div>
                </div>
                <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                  <img className="card-img-top" src="pic8.png.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Today's Top Hits</h5>
                    <p className="card-text">Karan Aujala is top at all playlist.</p>
                  </div>
                </div>

                <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                  <img className="card-img-top" src="pic8.png.jpeg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Today's Top Hits</h5>
                    <p className="card-text">Karan Aujala is top at all playlist.</p>
                  </div>
                </div>



                <section className="slider-wrapper">
                  <label className="heading">Popular new releases</label>




                  <ul className="slides-container" id="slides-container">
                    <li className="slide">
                      <div className="row">
                        <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                          <img className="card-img-top" src="pic9.png.jpeg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Today's Top Hits</h5>
                            <p className="card-text">Karan Aujala is top at all playlist.</p>

                          </div>
                        </div>
                        <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                          <img className="card-img-top" src="pic9.png.jpeg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Today's Top Hits</h5>
                            <p className="card-text">Karan Aujala is top at all playlist.</p>

                          </div>
                        </div>
                        <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                          <img className="card-img-top" src="pic9.png.jpeg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Today's Top Hits</h5>
                            <p className="card-text">Karan Aujala is top at all playlist.</p>

                          </div>
                        </div>
                        <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                          <img className="card-img-top" src="pic9.png.jpeg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Today's Top Hits</h5>
                            <p className="card-text">Karan Aujala is top at all playlist.</p>

                          </div>
                        </div>


                      </div>

                    </li>


                    <li className="slide">
                      <div className="row">
                        <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                          <img className="card-img-top" src="pic1.png.jpeg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Today's Top Hits</h5>
                            <p className="card-text">Babbu Maan is top at all playlist.</p>

                          </div>
                        </div>
                        <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                          <img className="card-img-top" src="pic1.png.jpeg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Today's Top Hits</h5>
                            <p className="card-text">Babbu Maan is top at all playlist.</p>

                          </div>
                        </div>
                        <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                          <img className="card-img-top" src="pic1.png.jpeg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Today's Top Hits</h5>
                            <p className="card-text">Babbu Maan is top at all playlist.</p>

                          </div>
                        </div>
                        <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                          <img className="card-img-top" src="pic1.png.jpeg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Today's Top Hits</h5>
                            <p className="card-text">Babbu Maan is top at all playlist.</p>

                          </div>
                        </div>
                      </div>

                    </li>

                    <li className="slide">
                      <div className="row">
                        <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                          <img className="card-img-top" src="pic1.png.jpeg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Today's Top Hits</h5>
                            <p className="card-text">Babbu Maan is top at all playlist.</p>

                          </div>
                        </div>
                        <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                          <img className="card-img-top" src="pic1.png.jpeg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Today's Top Hits</h5>
                            <p className="card-text">Babbu Maan is top at all playlist.</p>

                          </div>
                        </div>
                        <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                          <img className="card-img-top" src="pic1.png.jpeg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Today's Top Hits</h5>
                            <p className="card-text">Babbu Maan is top at all playlist.</p>

                          </div>
                        </div>
                        <div className="card" style={{ width: "18rem", background: "#3a3a3a", color: "white" }}>
                          <img className="card-img-top" src="pic1.png.jpeg" alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">Today's Top Hits</h5>
                            <p className="card-text">Babbu Maan is top at all playlist.</p>

                          </div>
                        </div>
                      </div>

                    </li>


                  </ul>
                </section>

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
