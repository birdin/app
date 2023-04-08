import { GrNotification } from "react-icons/gr";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav-dashboard fluid-container">
      <div className="nav-logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="menu-btn">
        <button>
          <AiOutlineMenu />
        </button>
      </div>
      <div className="nav-settings">
        <div className="nav-navigation">
          <button onClick={() => navigate(-1)}>
            <MdNavigateBefore />
          </button>
          <button onClick={() => navigate(1)}>
            <MdNavigateNext />
          </button>
        </div>
        <div className="nav-profile">
          <div className="notifications__icon">
            <GrNotification />
          </div>
          <div className="profile-username">
            <span>Username</span>
          </div>
          <div className="profile-avatar">
            <div className="profile-avatar__container">
              <img
                src="https://avatars.githubusercontent.com/u/4257305?v=4"
                alt="Avatar"
              />
            </div>
          </div>
          <button className="profile-settings">
            <BsThreeDots />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
