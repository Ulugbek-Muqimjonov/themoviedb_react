import { useContext, useEffect, useState } from "react";
import { RecomendentCard } from "../recomendentCard/RecomendentCard";
import { StyledList } from "./RecomendentList.styles";
import { getData } from "../../api/Api";
import { searchContext } from "../../context/search/SearchContext";
import axios from "axios";

export const RecomendentList = () => {
  const { search} = useContext(searchContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (search.length) {
      axios
        .get("https://api.themoviedb.org/3/search/movie?query=" + search, {
          params: {
            api_key: "d229f1a8f01dd6ffcca495220493d39a",
          },
        })
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      getData("movie/popular", setData);
    }
  }, [search]);
  return (
    <>
      <StyledList>
        {data?.results?.map((item) => (
          <RecomendentCard
            key={item.id}
            id={item.id}
            img={item.poster_path}
            title={item.title}
            date={item.release_date}
          />
        ))}
      </StyledList>
    </>
  );
};
