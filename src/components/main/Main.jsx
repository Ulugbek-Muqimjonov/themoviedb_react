import { Tranding } from "../tranding/Tranding";
import {
  Container,
  StyledPagesTitle,
  StyledSerachInp,
} from "../../styles/component.styles";
import { RecomendentList } from "../recomendentList/RecomendentList";
import { SearchContextProvider } from "../../context/search/SearchContext";
import { useCallback, useEffect, useMemo } from "react";
import axios from "axios";
import { useState } from "react";
import { getData } from "../../api/Api";

export const Main = () => {
  const [serchedDdata, setSerchedDdata] = useState("");
  const handlerSearched = (evt) => {
    setSerchedDdata(evt.target.value);
  };
  useCallback(() => {
    getData("search/movie?query=" + serchedDdata, setSerchedDdata);
  }, [handlerSearched]);

  console.log(serchedDdata);
  return (
    <>
      <Container>
        <StyledSerachInp
          placeholder="Search for movies or TV series"
          aria-label="enter your searched movie"
          type="search"
          onChange={handlerSearched}
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
