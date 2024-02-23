import { styled } from "styled-components";

export const StyledActorWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding-top: 20px;
`;
export const StyledActorImg = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
`;
export const StyledActorInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-bottom: 20px;
  color: #fff;
`;
export const StyledActorInfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const StyledActorBold = styled.strong`
  font-weight: 500;
  color: #fff;
`;
export const StyledActorInfoSpan = styled.span`
  width: 200px;
  color: #d1caca;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;
export const StyledActorInfoDesc = styled.p`
  margin: 0;
  color: #d1caca;
`;
