import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import AudioHook from "../AudioHook";
import DisplayImage from "../DisplayImage";

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <div>
        <AudioHook />
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
