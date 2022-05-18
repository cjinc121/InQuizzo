import "./Header.css";
import { RiLoginBoxFill } from "react-icons/ri";
import { IoIosStats } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";

const Header = () => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  return (
    <div className="header">
      <div className="brand-name" onClick={() => navigate("/")}>
        InQuizzo
      </div>
      <div className="header-buttons">
        <IoIosStats className="icon" onClick={() => navigate("/leaderboard")} />
        {authState.userId === "" ? (
          <RiLoginBoxFill
            className="icon"
            onClick={() => {
              navigate("/login");
            }}
          />
        ) : (
          <CgProfile
            className="icon"
            onClick={() => {
              navigate("/profile");
            }}
          />
        )}
      </div>
    </div>
  );
};
export { Header };
