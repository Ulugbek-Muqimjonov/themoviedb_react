import { styled } from "styled-components";
import bookmarkIcon from "../../assets/images/bookmark.svg";
import movieCardIcon from "../../assets/images/movieCardicon.svg";
export const TradingWrap = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["justifyContent", "alignItems", "direction"].includes(prop),
})`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "strech")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  height: 164px;
  margin-bottom: 24px;
  overflow-y: hidden;
`;

export const StyledSliderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 17px;
  margin: 0;
  padding-left: 20px;
  list-style: none;
`;
export const StyledItem = styled.li.withConfig({
  shouldForwardProp: (prop) => !["backimg"].includes(prop),
})`
  position: relative;
  width: 200px;
  background-color: #fff;
  height: 140px;
  border-radius: 8px;
  background-image: url(${(props) => props?.backimg? `${"https://image.tmdb.org/t/p/w500/" + props.backimg}`: ""});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;
export const StyledItemInfo = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["justifycontent", "alignitems", "direction"].includes(prop),
})`
  display: flex;
  align-items: ${(props) => (props.alignitems ? props.alignitems : "strech")};
  justify-content: ${(props) =>
    props.justifycontent ? props.justifycontent : "flex-start"};
  gap: 8px;
  margin-bottom: 4px;
`;
export const StyledItemImg = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
`;
export const StyledTradingSpan = styled.span`
  color: #fff;
  opacity: 0.75;
  font-size: 12px;
  font-weight: 300;
  line-height: 14px;
  letter-spacing: 0px;
  text-align: left;
`;
export const StyledTradingType = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  font-size: 12px;
  font-weight: 300;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  &::before {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url(${movieCardIcon});
    background-position: center;
    background-repeat: no-repeat;
    content: "";
  }
`;
export const StyledTradingtitle = styled.strong`
  display: inline-block;
  width: 168px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;

export const StyledBookmarkBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  width: 32px;
  height: 32px;
  background-image: url(${bookmarkIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
