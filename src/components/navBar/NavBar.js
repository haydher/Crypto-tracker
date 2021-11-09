import { NavParentContainer } from "../styles/NavParentContainer.style";
import Logo from "./Logo";
import NavBarOptions from "./NavBarOptions";

const NavBar = () => {
 return (
  <NavParentContainer>
   <div className="navChildren">
    <Logo />
    <NavBarOptions />
   </div>
  </NavParentContainer>
 );
};

export default NavBar;
