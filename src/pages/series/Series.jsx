import { useEffect, useState } from "react";
import { getData } from "../../api/Api";
import { RecomendentCard } from "../../components/recomendentCard/RecomendentCard";
import { StyledList } from "../../components/recomendentList/RecomendentList.styles";
import axios from "axios";
import { Container, StyledPagesTitle, StyledSerachInp } from "../../styles/component.styles";

export const Series = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getData("tv/airing_today", setData);
  }, []);
  console.log(data);
  return (
    <>
      <Container>
        <StyledSerachInp
          placeholder="Search for TV series"
          aria-label="enter your searched movie"
          type="search"
        />
        <StyledPagesTitle>TV series</StyledPagesTitle>
      </Container>
      <StyledList>
        {data?.results?.map((item) => (
          <RecomendentCard
            id={item.id}
            key={item.id}
            img={item.backdrop_path}
            title={item.name}
            date={item.first_air_date}
          />
        ))}
      </StyledList>
    </>
  );
};
