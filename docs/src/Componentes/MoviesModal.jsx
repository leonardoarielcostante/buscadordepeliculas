import { StyledButton } from "../StyledComponents/StyledButton"
import { StyledImg } from "../StyledComponents/StyledImg"
import { StyledModal } from "../StyledComponents/StyledModal"

export function MoviesModal({estado, cerrarVentana, datosPelicula}){

  return(
    estado &&
      <StyledModal>
        <header>
          <StyledImg alt='Imagen de la pelicula' 
                     src={ datosPelicula.Poster } 
                     height='350' />
        </header>
        <main>
          <h2>{ datosPelicula.Titulo }</h2>
          <p>Fecha de lanzamiento: {datosPelicula.Fecha}</p>
          <p>{datosPelicula.Descripcion}</p>
          <StyledButton onClick={ () => cerrarVentana() }
          >Cerrar</StyledButton>
        </main>
      </StyledModal>
  )
}