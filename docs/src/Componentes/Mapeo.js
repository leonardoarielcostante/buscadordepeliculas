import { useFetchMovies } from "../Custom Hooks/useFetchMovies";

export function Mapeo(query){

  const peliculas = useFetchMovies(query);
  const IMG_URL = 'https://image.tmdb.org/t/p/original'
  
  const mapped = peliculas.map(pelicula => ({
    Id: pelicula.id,
    Titulo: pelicula.title,
    Poster: pelicula.poster_path ? IMG_URL + pelicula.poster_path : false,
    Fecha: pelicula.release_date,
    Descripcion: pelicula.overview,
  }))

  return(mapped);
};