import { NavLink,useNavigate } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import DisplayImage from "../DisplayImage";



function Navigation() {

const navigate = useNavigate()



const goBack = () => { 
  navigate(-1)
}

  return (
    <ul>
      {/* <li>
        <NavLink to="/">Home</NavLink>
      </li> */}
      
      <div>
      <i className="fa-solid fa-arrow-left" onClick={goBack} id="arrow"></i>
      </div>
      <div>
        <ProfileButton />
      </div>
      <div>
        <DisplayImage />
      </div>
    </ul>
  );
}

export default Navigation;
