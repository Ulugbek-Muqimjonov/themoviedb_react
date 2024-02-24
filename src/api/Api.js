const Base_URL = "https://api.themoviedb.org/3/";
const API_KEY = "d229f1a8f01dd6ffcca495220493d39a";
import axios from "axios";
export const getData = (url, setState) => {
  axios
    .get(Base_URL + url, {
      params: {
        api_key: API_KEY,
        page: 3,
      },
    })
    .then((res) => setState(res.data));
};
