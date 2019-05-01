import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = ({user}) => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">Would you rather?</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <NavLink className="p-2 text-dark" to="/dashboard" activeClassName="selected">Dashboard</NavLink>
        <NavLink className="p-2 text-dark" to="/leaderboard" activeClassName="selected">Leader Board</NavLink>
        <NavLink className="p-2 text-dark" to="/new-question" activeClassName="selected">New Question</NavLink>
        <NavLink className="p-2 text-dark" to="/profile" activeClassName="selected">Hello,</NavLink>
      </nav>
      { user && (
        <Link to="/logout" className="btn btn-outline-primary">Logout</Link>
      )}
    </div>
)

export default Header