import { GrNotification } from 'react-icons/gr'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className='nav-dashboard'>
      <div className="nav-logo">
        <h1>
          Birdin
        </h1>
      </div>
      <div className="nav-settings">
        <div className="nav-navigation">
          <button>
            <MdNavigateBefore/>
          </button>
          <button>
            <MdNavigateNext/>
          </button>
        </div>
        <div className="nav-profile">
          <div className="notifications__icon">
            <GrNotification/>
          </div>
          <div className="profile-username">
            <span>Username</span>
          </div>
          <div className="profile-avatar">
            <div className="profile-avatar__container">
              <img src="https://avatars.githubusercontent.com/u/4257305?v=4" alt="Avatar"/>
            </div>
          </div>
          <button className="profile-settings">
            <BsThreeDots />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar