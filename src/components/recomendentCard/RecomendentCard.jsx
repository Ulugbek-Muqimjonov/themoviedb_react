import {
  StyledRecomendCard,
  StyledRecomendCardImg,
} from "./RecomendentCard.styles";
import {
  StyledBookmarkBtn,
  StyledItemInfo,
  StyledTradingSpan,
  StyledTradingType,
  StyledTradingtitle,
} from "../tranding/Tranding.stayles";
import { Link } from "react-router-dom";
export const RecomendentCard = ({id, img, title, date }) => {
  return (
    <StyledRecomendCard>
      <Link to={`${id}`} style={{ textDecoration: "none" }}>
        <StyledRecomendCardImg src={`https://image.tmdb.org/t/p/w200/${img}`} />
        <div
          className="trandinginfoWrap"
          style={{ margin: "0", background: "none" }}
        >
          <StyledItemInfo>
            <StyledTradingSpan>{date?.slice(0, 4)}</StyledTradingSpan>
            <StyledTradingType>Movie</StyledTradingType>
            <StyledTradingSpan>PG</StyledTradingSpan>
          </StyledItemInfo>
          <StyledTradingtitle>{title}</StyledTradingtitle>
        </div>
        <StyledBookmarkBtn />
      </Link>
    </StyledRecomendCard>
  );
};
