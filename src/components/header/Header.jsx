import { Link } from "react-router-dom";
import { Container } from "../../styles/component.styles";
import {
  NavImg,
  NavItem,
  NavList,
  Navbar,
  StyledHeader,
  WrapDiv,
} from "./Header.styled";
import logo from "../../assets/images/movieIcon.svg";
import tradingIcon from "../../assets/images/trandingIcon.png";
import moviesIcon from "../../assets/images/moviesIcon.png";
import seriesIcon from "../../assets/images/seriesIcon.png";
import bookmarkIcon from "../../assets/images/bookmarkIocn.png";
import userIcon from "../../assets/images/user.svg";
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <WrapDiv alignitems="center" justifycontent="space-between">
          <Link to={"/"}>
            <img src={logo} alt="site logo" width={25} height={20} />
          </Link>
          <Navbar>
            <NavList>
              <NavItem>
                <Link to={"/"}>
                  <NavImg src={tradingIcon} alt="Trending page icon" />
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"/movies"}>
                  <NavImg src={moviesIcon} alt="Trending page icon" />
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"/series"}>
                  <NavImg src={seriesIcon} alt="Trending page icon" />
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"/saved"}>
                  <NavImg src={bookmarkIcon} alt="Trending page icon" />
                </Link>
              </NavItem>
            </NavList>
          </Navbar>
          <Link to={"/user"}>
            <img src={userIcon} alt="" width={24} height={24} />
          </Link>
        </WrapDiv>
      </Container>
    </StyledHeader>
  );
};
