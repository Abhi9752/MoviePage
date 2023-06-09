import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow rounded">
        <div className="container-fluid">
          <a className="navbar-brand text-dark" href="#home">Movie</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link active text-dark" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#summary">Summary</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#trailer">Trailer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href='#recommended'>Recommended</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavBar