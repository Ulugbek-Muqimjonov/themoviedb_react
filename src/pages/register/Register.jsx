import {
  AuthButton,
  AuthForm,
  AuthLink,
  AuthSpan,
  AuthTitle,
  AuthWrap,
  Container,
  StyledInput,
} from "../../styles/component.styles";
import MovieIocn from "../../assets/images/movieIcon.svg";
import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <div className="resiter__wrap">
      <Container>
        <AuthWrap>
          <img
            src={MovieIocn}
            alt="movie icon"
            width={32}
            height={25}
            style={{ marginBottom: "58px" }}
          />
          <AuthForm>
            <AuthTitle>Sign Up</AuthTitle>
            <StyledInput
              placeholder="Email address"
              type="email"
              aria-label="enter your email"
              required
            />
            <StyledInput
              placeholder="Password"
              type="password"
              aria-label="enter your password"
              required
              autoComplete="on"
            />
            <StyledInput
              placeholder="Repeat password"
              type="password"
              aria-label="enter your password repeat"
              required
              autoComplete="on"
            />
            <AuthButton style={{ margin: "17px 0" }}>
              Create an account
            </AuthButton>
            <AuthSpan style={{ marginBottom: "2px" }}>
              Already have an account?{" "}
              <Link to={"/login"} style={{textDecoration:"none"}}> 
                <AuthLink>Login</AuthLink>
              </Link>
            </AuthSpan>
          </AuthForm>
        </AuthWrap>
      </Container>
    </div>
  );
};
