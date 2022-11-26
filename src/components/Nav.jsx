import React from 'react'

export const Nav = ({page, pages, setPage}) => {
    return <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="#" onClick={()=> setPage(pages[0])}>Justin</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={()=> setPage(pages[0])}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=> setPage(pages[1])}>Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=> setPage(pages[2])}>Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=> setPage(pages[3])}>Resume</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>
}