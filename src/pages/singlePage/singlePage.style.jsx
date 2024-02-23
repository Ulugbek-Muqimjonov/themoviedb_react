import { styled } from "styled-components";
import adult18 from "../../assets/images/adult18.jfif";
export const SinglePageWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  color: #fff;
`;
export const SingleImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: fill;
  object-position: center;
  border-radius: 8px;
`;
export const SingleItemInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const SingleInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding-left: 0;
  padding-top: 10px;
  list-style: none;
`;
export const SingleInfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const SingleStrong = styled.strong`
  font-weight: 500;
  color: #fff;
`;
export const SingleSpan = styled.span`
  width: 150px;
  color: #d1caca;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;

export const SingleIcon = styled.span.withConfig({
  shouldForwardProp: (prop) => !["adult"].includes(prop),
})`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url(${(props) => (!props.adult ? adult18 : "false")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

export const SingleDecription = styled.p`
  margin: 0;
  color: #b6b2b2;
`;

export const SingleActorsList = styled(SingleInfoList)`
  flex-direction: row;
  overflow-x: scroll;
  gap: 15px;
  margin-bottom: 20px;
`;
export const SingleActors = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 230px;
  border-radius: 8px;
  border: 1px solid #fff;
`;
export const SingleActorImg = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;
export const SingleActorInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
export const SingleActorInfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 200px;
`;

export const SingleRecommendetionWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-bottom: 50px;
`;
