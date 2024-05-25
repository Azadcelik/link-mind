import { NavLink,useNavigate } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import AudioHook from "../AudioHook";
import DisplayImage from "../DisplayImage";



function Navigation() {

const navigate = useNavigate()



const goBack = () => { 
  navigate(-1)
}

  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <div>
        <AudioHook />
      </div>

      <div>
      <i className="fa-solid fa-arrow-left" onClick={goBack}></i>
      </div>
      <li>
        <ProfileButton />
      </li>
      <div>
        <DisplayImage />
      </div>
    </ul>
  );
}

export default Navigation;
