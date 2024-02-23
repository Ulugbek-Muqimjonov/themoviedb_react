import { styled } from "styled-components";
import serachIcon from "../assets/images/search.svg";
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const StyledPagesTitle = styled.h2`
  margin: 0;
  margin-bottom: 24px;
  margin-left: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: -0.31px;
  text-align: left;
`;
// AUTH

export const AuthWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
`;
export const StyledInput = styled.input`
  padding: 17px 16px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #5a698f;
  ::placeholder {
    opacity: 0.5;
    color: hsl(0, 0%, 100%);
    font-size: 15px;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
`;
export const AuthButton = styled.button`
  display: inline-block;
  padding: 14px;
  border: none;
  border-radius: 6px;
  background-color: #fc4747;
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 0 auto;
  width: 280px !important;
  padding: 24px;
  border-radius: 20px;
  background-color: #161d2f;
`;
export const AuthTitle = styled.h2`
  margin: 0;
  margin-bottom: 23px;
  color: #fff;
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: -0.5px;
  text-align: left;
`;

export const AuthSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: right;
`;
export const AuthLink = styled.span`
  color: #fc4747;
  font-size: 15px;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
`;

// main

export const StyledSerachInp = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 16px 26px;
  padding-left: 40px;
  border: none;
  background-color: transparent;
  background-image: url(${serachIcon});
  background-repeat: no-repeat;
  background-position: 0 center;
  background-size: 18px;
  color: #fff;
  font-size: 16px;
  &::placeholder {
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0px;
    opacity: 0.5;
    text-align: left;
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;
