import { useEffect, useState } from "react";
import { RecomendentList } from "../../components/recomendentList/RecomendentList";
import axios from "axios";
import { getData } from "../../api/Api";
import { StyledList } from "../../components/recomendentList/RecomendentList.styles";
import { RecomendentCard } from "../../components/recomendentCard/RecomendentCard";
import {
  Container,
  StyledPagesTitle,
  StyledSerachInp,
} from "../../styles/component.styles";
import { useNavigate } from "react-router-dom";

export const Movies = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getData("movie/upcoming", setData);
  }, []);
  return (
    <>
      <Container>
        <StyledSerachInp
          placeholder="Search for movies"
          aria-label="enter your searched movie"
          type="search"
        />
        <StyledPagesTitle>Movies</StyledPagesTitle>
      </Container>

      <StyledList>
        {data?.results?.map((item) => (
          <RecomendentCard
            id={item.id}
            key={item.id}
            img={item.backdrop_path}
            title={item.title}
            date={item.release_date}
          />
        ))}
      </StyledList>
    </>
  );
};
