import styled from "styled-components";

export const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-content: center;
  justify-items: center;
  gap: 32px;
  padding: 15px;

  li {
    display: flex;
    max-width: 250px;
    flex-direction: column;
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: small;
    list-style: none;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
    transform: scale(1.1);
    transition: all 400ms;
  }
  }

  li h3 {
    display: flex;
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    color: white;
    align-items: center;
    background-color: ;
    justify-content: center;
    margin: 0;
    padding: 5px;
    height: 50px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
  }
`

