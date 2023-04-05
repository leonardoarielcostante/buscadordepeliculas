import styled from "styled-components";

export const StyledImg = styled.img`
  width: 100%;
  height: '${props => props.height}';
  object-fit: fill;
  border-radius: 5px 5px 0px 0px;
`