import React from 'react'

export const Nav = ({page, pages, setPage}) => {
    return <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: '#343a40'}}>
    <div className="container-fluid">
    <a className="navbar-brand fs-4 m-2" onClick={()=> setPage(pages[0])}>Justin Hollis</a>
    <div className="navbar navbar-dark" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item fs-4">
          <a className="nav-link active" aria-current="page" onClick={()=> setPage(pages[0])}>Home</a>
        </li>
        <li className="nav-item fs-4">
          <a className="nav-link" onClick={()=> setPage(pages[1])}>Portfolio</a>
        </li>
        <li className="nav-item fs-4">
          <a className="nav-link" onClick={()=> setPage(pages[2])}>Contact</a>
        </li>
        <li className="nav-item fs-4">
          <a className="nav-link" onClick={()=> setPage(pages[3])}>Resume</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>
}