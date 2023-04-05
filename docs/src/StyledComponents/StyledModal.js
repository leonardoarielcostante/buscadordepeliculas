import styled from "styled-components"

export const StyledModal = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition: all .5s;

  header {
    margin-right: 20px;
  }

  p {
    width: 600px;
  }

  @media(max-width: 900px){
    flex-direction: column;
    text-align: center;
    font-size: 12px;


    p {
      width: 300px;
    }
  }
`