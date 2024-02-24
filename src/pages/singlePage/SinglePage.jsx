import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getData } from "../../api/Api";
import {
  SingleActorImg,
  SingleActorInfoItem,
  SingleActorInfoList,
  SingleActors,
  SingleActorsList,
  SingleDecription,
  SingleIcon,
  SingleImg,
  SingleInfoItem,
  SingleInfoList,
  SingleItemInfoWrap,
  SinglePageWrap,
  SingleRecommendetionWrap,
  SingleSpan,
  SingleStrong,
} from "./singlePage.style";
import { Container } from "../../styles/component.styles";
import defaultActorAvatar from "../../assets/images/defaultActorAvatar.png";
import defaultMovieImg from "../../assets/images/defaultMovieImg.png";
import "./singlePage.css";
import {
  StyledItem,
  StyledItemInfo,
  StyledSliderList,
  StyledTradingSpan,
  StyledTradingType,
  StyledTradingtitle,
} from "../../components/tranding/Tranding.stayles";
export const SinglePage = () => {
  const param = useParams();
  const [name, id] = Object.values(param);
  const [single, setSinle] = useState({});
  const [singleActors, setSingleActors] = useState([]);
  const [singleRecomendations, setSingleRecomendations] = useState([]);
  const func = (url) => {
    getData(`${url}/${id}`, setSinle);
    getData(`${url}/${id}/credits`, setSingleActors);
    getData(`${url}/${id}/recommendations`, setSingleRecomendations);
  };
  useEffect(() => {
    if (name.startsWith("series")) {
      func("tv");
    } else {
      func("movie");
    }
  }, [id]);
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <SinglePageWrap>
          <button
            className="back-link"
            onClick={() => navigate(-1)}
            style={{ marginBottom: "20px", backgroundColor: "transparent" }}
          >
            Back
          </button>
          <SingleImg
            src={
              single.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${single.backdrop_path}`
                : defaultMovieImg
            }
          />
          <SingleItemInfoWrap>
            <SingleInfoList>
              <SingleInfoItem>
                <SingleStrong>Name:</SingleStrong>
                <SingleSpan className="sinle-name">
                  {single.name ? single.name : single.title}
                </SingleSpan>
              </SingleInfoItem>
              <SingleInfoItem>
                <SingleStrong>Date:</SingleStrong>
                <SingleSpan>
                  {single.release_date ? single.release_date : ""}
                </SingleSpan>
              </SingleInfoItem>
              <SingleInfoItem>
                <SingleStrong>Language:</SingleStrong>
                <SingleSpan>
                  {single.spoken_languages
                    ? single.spoken_languages[0].english_name.toUpperCase()
                    : "undefined"}
                </SingleSpan>{" "}
              </SingleInfoItem>
              <SingleInfoItem>
                <SingleStrong>Time:</SingleStrong>
                <SingleSpan>
                  {Math.floor(single?.runtime / 60) + " h"}
                </SingleSpan>
                <SingleSpan>
                  {single.runtime -
                    Math.floor(single?.runtime / 60) * 60 +
                    " min"}
                </SingleSpan>
              </SingleInfoItem>
              <SingleInfoItem>
                <SingleStrong>Avarage:</SingleStrong>
                <SingleSpan>{single.vote_average?.toFixed(1)}</SingleSpan>
              </SingleInfoItem>
              <SingleInfoItem>
                <SingleStrong>Budget:</SingleStrong>
                <SingleSpan>{single.budget ? single.budget : "not"}</SingleSpan>
              </SingleInfoItem>
            </SingleInfoList>
            <SingleDecription>
              <SingleStrong style={{ display: "block", marginBottom: "10px" }}>
                Descrition:
              </SingleStrong>
              {single?.overview}
            </SingleDecription>
          </SingleItemInfoWrap>
          <SingleStrong
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            Actors:
            <SingleSpan style={{ fontSize: "16px", marginLeft: "10px" }}>
              {singleActors?.cast?.length}
            </SingleSpan>
          </SingleStrong>
          <SingleActorsList>
            {singleActors?.cast?.map((item) => (
              <SingleActors key={item.id}>
                <Link
                  to={`/actor/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <SingleActorImg
                    src={
                      item?.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${item?.profile_path}`
                        : defaultActorAvatar
                    }
                  />
                  <SingleActorInfoList>
                    <SingleActorInfoItem>
                      <SingleStrong>Name:</SingleStrong>
                      <SingleSpan>{item?.name}</SingleSpan>
                    </SingleActorInfoItem>
                    <SingleActorInfoItem>
                      <SingleStrong>Characker:</SingleStrong>
                      <SingleSpan>{item?.character}</SingleSpan>
                    </SingleActorInfoItem>
                    <SingleActorInfoItem>
                      <SingleStrong>Popularity:</SingleStrong>
                      <SingleSpan>{item?.popularity}</SingleSpan>
                    </SingleActorInfoItem>
                  </SingleActorInfoList>
                </Link>
              </SingleActors>
            ))}
          </SingleActorsList>
          <SingleStrong
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            Classified films
          </SingleStrong>
          <SingleRecommendetionWrap>
            <StyledSliderList>
              {singleRecomendations?.results?.map((item) => (
                <StyledItem key={item.id} backimg={item.poster_path}>
                  <Link to={`/${item.id}`} className="tranding-link">
                    <div className="trandinginfoWrap">
                      <StyledItemInfo>
                        <StyledTradingSpan>
                          {item?.release_date?.slice(0, 4)}
                        </StyledTradingSpan>
                        <StyledTradingType>Movie</StyledTradingType>
                        <StyledTradingSpan>PG</StyledTradingSpan>
                      </StyledItemInfo>
                      <StyledTradingtitle>{item.title}</StyledTradingtitle>
                    </div>
                  </Link>
                </StyledItem>
              ))}
            </StyledSliderList>
          </SingleRecommendetionWrap>
        </SinglePageWrap>
      </Container>
    </>
  );
};
