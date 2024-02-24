import { Tranding } from "../tranding/Tranding";
import {
  Container,
  StyledPagesTitle,
  StyledSerachInp,
} from "../../styles/component.styles";
import { RecomendentList } from "../recomendentList/RecomendentList";
import { searchContext } from "../../context/search/SearchContext";
import { useCallback, useContext, useEffect, useMemo } from "react";
import axios from "axios";
import { useState } from "react";
import { getData } from "../../api/Api";

export const Main = () => {
  const { search, setSearch } = useContext(searchContext);
  return (
    <>
      <Container>
        <StyledSerachInp
          placeholder="Search for movies or TV series"
          aria-label="enter your searched movie"
          type="search"
          onChange={(evt) => setSearch(evt.target.value)}
        />
      </Container>
      {!search && <Tranding />}
      <Container>
        <StyledPagesTitle style={{ marginLeft: "0" }}>
          Recommended for you
        </StyledPagesTitle>
        <RecomendentList />
      </Container>
    </>
  );
};
