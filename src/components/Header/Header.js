import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const Header = ({user, location}) => {
  return  (
    <div className="Header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">Would you rather?</h5>
        {user && (
          <nav className="my-2 my-md-0 mr-md-3">
            <NavLink className="p-2 text-dark" to="/dashboard" activeClassName="selected">Dashboard</NavLink>
            <NavLink className="p-2 text-dark" to="/add" activeClassName="selected">New Question</NavLink>
            <NavLink className="p-2 text-dark" to="/leaderboard" activeClassName="selected">Leader Board</NavLink>
            <span className="p-2 text-dark" >Hello, {user.name}</span>
            <Link to="/logout" className="btn btn-outline-primary">Logout</Link>
          </nav>
        )}
        {!user && location.pathname !== '/login' && (
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 text-dark" to="/login">Login</Link>
            </nav>
        )}
      </div>
  )
}
export default Header