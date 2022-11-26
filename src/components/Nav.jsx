import React from 'react'

export const Nav = ({page, pages, setPage}) => {
    return <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand" onClick={()=> setPage(pages[0])}>Justin</a>
    <div className="navbar navbar-dark" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=> setPage(pages[0])}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=> setPage(pages[1])}>Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=> setPage(pages[2])}>Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=> setPage(pages[3])}>Resume</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>
}