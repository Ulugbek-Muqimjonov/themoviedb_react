import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 18px 0;
  background: #161d2f;
`;
export const WrapDiv = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["alignitems", "justifycontent", "gap"].includes(prop),
})`
  display: flex;
  align-items: ${(props) => (props.alignitems ? props.alignitems : "strech")};
  justify-content: ${(props) =>
    props.justifycontent ? props.justifycontent : "flex-start"};
  gap: ${(props) => (props.gap ? props.gap : "0")};
`;
export const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 0;
  padding-left: 0;
  list-style: none;
`;
export const NavItem = styled.li``;

export const NavImg = styled.img`
  display: inline-block;
  width: 16px;
  height: 16px;
  object-fit: cover;
`;
