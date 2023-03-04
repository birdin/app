import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <h1>
          Birdin
        </h1>
      </div>
      <div className="nav-settings">
        <div className="nav-navigation">
          <button>
            before
          </button>
          <button>
            next
          </button>
        </div>
        <div className="nav-profile">
          <button className="notifications__btn">
            <i className="fas fa-bell"></i>
          </button>
          <div className="profile__username">
            <span>Username</span>
          </div>
          <button className="profile__btn">
            <i className="fas fa-user"></i>
          </button>
          <button className="profile__settings">
            <i className="fas fa-cog"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar