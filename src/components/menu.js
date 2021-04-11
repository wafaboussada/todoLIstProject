import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Menu = () => {
  function deconnect() {
    localStorage.setItem('is_connected', false);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Todo List</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tasks">Tâches</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={deconnect}>Déconnexion</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
