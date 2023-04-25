import { useContext } from "react";
import { GrNotification } from "react-icons/gr";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import { GlobalContext } from "../../context/GlobalContext";
import { BiGridVertical } from "react-icons/bi";

import { isValidURL } from "../../utils/validateURL";
import AvatarUserPlaceholder from "../Placeholder/AvatarUserPlaceholder";
import { normalizeText } from "../../utils/normalizeText";

const Navbar = () => {
  const navigate = useNavigate();
  const { state } = useContext(GlobalContext);
  const { id } = useParams();

  return (
    <nav className="nav-dashboard fluid-container">
      <div className="nav-logo">
        <Link to="/">
          <div className="menu-icon__container">
            <BiGridVertical />
          </div>
        </Link>
        <Link to={id ? `/project/${id}` : "/"}>
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
            <span>{normalizeText(state.user.name, 10)}</span>
          </div>
          <div className="profile-avatar">
            <div className="profile-avatar__container">
              {isValidURL(state.user.avatar) ? (
                <img src={state.user.avatar} alt="Avatar" />
              ) : (
                <AvatarUserPlaceholder />
              )}
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
