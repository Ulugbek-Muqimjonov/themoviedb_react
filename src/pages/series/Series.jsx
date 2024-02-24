import { useContext, useEffect, useState } from "react";
import { getData } from "../../api/Api";
import { RecomendentCard } from "../../components/recomendentCard/RecomendentCard";
import { StyledList } from "../../components/recomendentList/RecomendentList.styles";
import axios from "axios";
import {
  Container,
  StyledPagesTitle,
  StyledSerachInp,
} from "../../styles/component.styles";
import { searchContext } from "../../context/search/SearchContext";

export const Series = () => {
  const { search, setSearch } = useContext(searchContext);
  const [data, setData] = useState();
  useEffect(() => {
    if (search.length) {
      axios
        .get("https://api.themoviedb.org/3/search/tv?query=" + search, {
          params: {
            api_key: "d229f1a8f01dd6ffcca495220493d39a",
          },
        })
        .then((res) => setData(res.data));
    } else {
      getData("tv/airing_today", setData);
    }
  }, [search]);
  return (
    <>
      <Container>
        <StyledSerachInp
          placeholder="Search for TV series"
          aria-label="enter your searched movie"
          type="search"
          onChange={(evt) => setSearch(evt.target.value)}
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
