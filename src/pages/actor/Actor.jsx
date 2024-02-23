import { useEffect, useState } from "react";
import { getData } from "../../api/Api";
import {
  StyledActorBold,
  StyledActorImg,
  StyledActorInfoDesc,
  StyledActorInfoItem,
  StyledActorInfoList,
  StyledActorInfoSpan,
  StyledActorWrap,
} from "./Actor.style";
import { Container } from "../../styles/component.styles";
import { Link, useParams } from "react-router-dom";
import defaultActorAvatar from "../../assets/images/defaultActorAvatar.png";
export const Actor = () => {
  const [actor, setActor] = useState({});
  const { actor_id } = useParams();
  useEffect(() => {
    getData(`person/${actor_id}`, setActor);
  }, []);
  console.log(actor);
  return (
    <Container>
      <StyledActorWrap>
        <Link className="back-link" to={"/"}>Back</Link>
        <StyledActorImg
          src={
            actor?.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor?.profile_path}`
              : defaultActorAvatar
          }
        />
        <StyledActorInfoList>
          <StyledActorInfoItem>
            <StyledActorBold>Name:</StyledActorBold>
            <StyledActorInfoSpan>{actor.name}</StyledActorInfoSpan>
          </StyledActorInfoItem>
          <StyledActorInfoItem>
            <StyledActorBold>Birthday:</StyledActorBold>
            <StyledActorInfoSpan>{actor?.birthday? actor.birthday:"undefined"}</StyledActorInfoSpan>
          </StyledActorInfoItem>
          <StyledActorInfoItem>
            <StyledActorBold>Deathday:</StyledActorBold>
            <StyledActorInfoSpan>
              {actor?.deathday ? actor.deathday : "Alive"}
            </StyledActorInfoSpan>
          </StyledActorInfoItem>
          <StyledActorInfoItem>
            <StyledActorBold>Homeland:</StyledActorBold>
            <StyledActorInfoSpan>{actor?.place_of_birth? actor.place_of_birth:"undefined"}</StyledActorInfoSpan>
          </StyledActorInfoItem>
          <StyledActorInfoItem>
            <StyledActorBold>Popularity:</StyledActorBold>
            <StyledActorInfoSpan>
              {actor?.popularity?.toFixed(1)}
            </StyledActorInfoSpan>
          </StyledActorInfoItem>
        </StyledActorInfoList>
        <StyledActorInfoDesc>
          <StyledActorBold style={{ display: "block", marginBottom: "10px" }}>
            Description:
          </StyledActorBold>
          {actor?.biography? actor?.biography: "undefined"}
        </StyledActorInfoDesc>
      </StyledActorWrap>
    </Container>
  );
};
