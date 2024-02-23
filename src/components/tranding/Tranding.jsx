import { Link } from "react-router-dom";
import { StyledPagesTitle } from "../../styles/component.styles";
import {
  StyledBookmarkBtn,
  StyledItem,
  StyledItemInfo,
  StyledSliderList,
  StyledTradingSpan,
  StyledTradingType,
  StyledTradingtitle,
  TradingWrap,
} from "./Tranding.stayles";
import "./tranding.css";
import { getData } from "../../api/Api";
import { useEffect, useState } from "react";
export const Tranding = () => {
  const [trading, setTrading] = useState([]);
  useEffect(() => {
    getData("movie/top_rated", setTrading);
  }, []);
  return (
    <>
      <StyledPagesTitle>Trending</StyledPagesTitle>
      <TradingWrap>
        <StyledSliderList>
          {trading?.results?.map((item) => (
            <StyledItem key={item.id} backimg={item.backdrop_path}>
              <Link to={`tranding/${item.id}`} className="tranding-link">
                <div className="trandinginfoWrap">
                  <StyledItemInfo>
                    <StyledTradingSpan>
                      {item.release_date.slice(0, 4)}
                    </StyledTradingSpan>
                    <StyledTradingType>Movie</StyledTradingType>
                    <StyledTradingSpan>PG</StyledTradingSpan>
                  </StyledItemInfo>
                  <StyledTradingtitle>{item.title}</StyledTradingtitle>
                </div>
                <StyledBookmarkBtn />
              </Link>
            </StyledItem>
          ))}
        </StyledSliderList>
      </TradingWrap>
    </>
  );
};
