import { useRef, useState } from 'react';
import { StyledButton } from './StyledComponents/StyledButton';
import { StyledForm } from './StyledComponents/StyledForm';
import { StyledInput } from './StyledComponents/StyledInput';
import { StyledMain } from './StyledComponents/StyledMain';
import { StyledSection } from './StyledComponents/StyledSection';
import { StyledUl } from './StyledComponents/StyledUl';
import { MappedMovies } from './Componentes/MappedMovies';
import { MoviesModal } from './Componentes/MoviesModal';
import { useFetchRecomendation } from './Custom Hooks/useFetchRecomendation';

export default function BuscadorDePeliculas(){

  const nombrePelicula = useRef('');
  const [buscar, setBuscar] = useState('');
  const [ventana, setVentana] = useState(false);
  const [datosPelicula, setdatosPelicula] = useState([])
  const recomendada = useFetchRecomendation();

  const handleSubmit = (e) => {
    e.preventDefault()
    setBuscar(nombrePelicula.current.value)
  }

  const abrirVentana = (pelicula) => {
    setVentana(true);
    setdatosPelicula(pelicula)
  }

  const cerrarVentana = () => {
    setVentana(false)
  }

  const recomendadas = (e) => {
    e.preventDefault();
    setBuscar(recomendada.title);
    
  }
  
  return(
    <StyledSection>
      <header>
        <h1>Buscador de Peliculas</h1>
      </header>
      <StyledMain>
        <StyledForm onSubmit={ handleSubmit }>
          <StyledInput placeholder='Avengers, The Matrix, Indiana Jhones, ...'
                       ref={nombrePelicula}
                       type="text" />
          <StyledButton>Buscar</StyledButton>
          <StyledButton margin={'0 0px 0 8px'}
                        onClick={ recomendadas }
          >Recomendado</StyledButton>
        </StyledForm>
        <StyledUl>
          <MappedMovies query={ buscar }
                        abrirVentana={ abrirVentana } />
        </StyledUl>
        <MoviesModal estado={ ventana }
                     cerrarVentana={ cerrarVentana } 
                     datosPelicula={ datosPelicula } />
      </StyledMain>
    </StyledSection>
  )
}