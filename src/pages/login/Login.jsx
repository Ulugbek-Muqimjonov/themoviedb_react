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
export const Login = () => {
  return (
    <div className="login-wrap">
      <Container>
        <AuthWrap>
          <img
            src={MovieIocn}
            alt="movie icon"
            width={32}
            height={25}
            style={{ marginBottom: "72px" }}
          />
          <AuthForm>
            <AuthTitle>Login</AuthTitle>
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
            <AuthButton style={{ margin: "17px 0 " }}>
              Login to your account
            </AuthButton>
            <AuthSpan style={{ marginBottom: "6px" }}>
              Don’t have an account?
              <Link to={"/register"} style={{textDecoration:"none"}}>
                <AuthLink >Sign Up</AuthLink>
              </Link>
            </AuthSpan>
          </AuthForm>
        </AuthWrap>
      </Container>
    </div>
  );
};
