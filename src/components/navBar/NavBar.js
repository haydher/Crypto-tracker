import { NavParentContainer } from "../styles/NavParentContainer.style";
import Logo from "./Logo";
import NavBarOptions from "./NavBarOptions";
import { Link } from "react-router-dom";

const NavBar = () => {
 return (
  <NavParentContainer>
   <div className="navChildren">
    <Link to={{ pathname: "/" }}>
     <Logo />
    </Link>

    <NavBarOptions />
   </div>
  </NavParentContainer>
 );
};

export default NavBar;
