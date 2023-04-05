import { Mapeo } from "./Mapeo";
import { StyledImg } from "../StyledComponents/StyledImg";

export function MappedMovies({query, abrirVentana}){

  const mensajeError = 'No se han encontrado peliculas';
  const peliculas = Mapeo(query);

return(
  peliculas.length !== 0 ?
    peliculas.map(pelicula => (
      pelicula.Poster &&
        <li key={ pelicula.Id }
            onClick={ () => abrirVentana(pelicula) }>
            <StyledImg alt={'Poster de' + pelicula.Titulo} 
                       src={ pelicula.Poster }
                       height='100%' />
          <h3>{ pelicula.Titulo }</h3>
        </li>
      )) :
        <p>{mensajeError}</p>
)
}