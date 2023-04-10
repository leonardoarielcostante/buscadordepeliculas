import { useEffect, useState } from "react";

export function useFetchMovies(buscar){

  const [peliculas, setPeliculas] = useState([])

  const API_KEY = '8bd02591db3d6ffcc94b9137f4fffd2a'
  const MOVIES_URL = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=es-ES&query=${buscar}&include_adult=false`;
  const RECOMENDATION_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES`

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((res) => {
        if(!res.ok){
          throw new Error('Fallo en la peticion')
        }
        return res.json()
      })
      .then((res) => {
        return setPeliculas(res.results)
      })
      .catch(error => {
        console.error('Hubo un error en la peticion:', error)
      })
  }, [buscar]);

  useEffect(() => {
    fetch(RECOMENDATION_URL)
    .then((res) => {
      if(!res.ok){
        throw new Error('Fallo en la peticion')
      }
      return res.json()
    })
    .then((res) => {
      return setPeliculas(res.results)
    })
    .catch(error => {
      console.error('Hubo un error en la peticion:', error)
    })
  }, []);

  return ( peliculas );

} 