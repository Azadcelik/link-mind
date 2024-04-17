import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import AudioHook from "../AudioHook";

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
    </ul>
  );
}

export default Navigation;
