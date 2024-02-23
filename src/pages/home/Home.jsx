import { useContext } from "react";
import { Header } from "../../components/header/Header";
import { Main } from "../../components/main/Main";
import {
  SearchContextProvider,
  searchContext,
} from "../../context/search/SearchContext";
import { Container, StyledSerachInp } from "../../styles/component.styles";
import { Route, Routes } from "react-router-dom";
import { Movies } from "../movies/Movies";
import { Series } from "../series/Series";
import { Saved } from "../saved/Saved";
import { SinglePage } from "../singlePage/SinglePage";
import { Actor } from "../actor/Actor";
export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Routes>
            <Route path="/">
              <Route path="/" element={<Main />} />
              <Route path="tranding/:id" element={<SinglePage />} />
              <Route path=":id" element={<SinglePage />} />
            </Route>
            <Route path="/movies">
              <Route index element={<Movies />} />
              <Route path=":id" element={<SinglePage />} />
            </Route>
            <Route path="/series">
              <Route index element={<Series />} />
              <Route path=":id" element={<SinglePage />} />
            </Route>
            <Route path="/saved" element={<Saved />}>
              <Route index element={<Saved />} />
              <Route path="id" element={<SinglePage />} />
            </Route>
            <Route path="/actor/:actor_id" element={<Actor/>}/>
          </Routes>
        </section>
      </main>
    </>
  );
};
