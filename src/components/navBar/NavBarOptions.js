import { NavContainer } from "../styles/NavContainer.style";
import { Container } from "../styles/Container.style";
import { useSelector, useDispatch } from "react-redux";
import Icon from "./Icon";
// import ChangeCurrency from "./ChangeCurrency";
import Search from "./Search";
import { changeThemeState } from "../../redux/changeTheme.redux";

const NavBarOptions = () => {
 const dispatch = useDispatch();
 const { currTheme } = useSelector((state) => state.changeTheme);

 return (
  <NavContainer>
   <Container onClick={() => dispatch(changeThemeState())}>
    <Icon img={currTheme === "light" ? "moon" : "sun"} />
   </Container>

   {/* <Container>
    <Icon img="notification" />
   </Container> */}

   {/* <Container>
    <ChangeCurrency />
   </Container> */}

   <Container noPadding={true}>
    <Search />
   </Container>
  </NavContainer>
 );
};

export default NavBarOptions;
