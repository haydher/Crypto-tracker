import { NavContainer } from "../styles/NavContainer.style";
import { Container } from "../styles/Container.style";

import Icon from "./Icon";
import ChangeCurrency from "./ChangeCurrency";
import Search from "./Search";

const NavBarOptions = () => {
 return (
  <NavContainer>
   {/* dark mode */}
   <Container>
    <Icon img="moon" />
   </Container>

   {/* notification */}
   <Container>
    <Icon img="notification" />
   </Container>

   <Container>
    <ChangeCurrency />
   </Container>

   <Container noPadding={true}>
    <Search />
   </Container>
  </NavContainer>
 );
};

export default NavBarOptions;
