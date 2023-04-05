import { useEffect, useState } from "react";

export function useFetchRecomendation() {

  const[recomendadas, setRecomendadas] = useState([]);
  const randompage = Math.floor(Math.random() * 20 + 1);
  const randomMovie = Math.floor(Math.random() * 20);
  const API_KEY = '8bd02591db3d6ffcc94b9137f4fffd2a';
  const RECOMENDATION_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${randompage}`;


  useEffect(() => {
    fetch(RECOMENDATION_URL)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      return setRecomendadas(res.results)
    })
  }, []);

  return(recomendadas[randomMovie]);
}