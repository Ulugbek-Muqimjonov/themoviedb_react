import { Tranding } from "../tranding/Tranding";
import {
  Container,
  StyledPagesTitle,
  StyledSerachInp,
} from "../../styles/component.styles";
import { RecomendentList } from "../recomendentList/RecomendentList";
import { SearchContextProvider } from "../../context/search/SearchContext";

export const Main = () => {
  return (
    <>
      <Container>
        <StyledSerachInp
          placeholder="Search for movies or TV series"
          aria-label="enter your searched movie"
          type="search"
          // onChange={searched}
        />
      </Container>
      <Tranding />
      <Container>
        <StyledPagesTitle style={{ marginLeft: "0" }}>
          Recommended for you
        </StyledPagesTitle>
        <SearchContextProvider>
          <RecomendentList />
        </SearchContextProvider>
      </Container>
    </>
  );
};
