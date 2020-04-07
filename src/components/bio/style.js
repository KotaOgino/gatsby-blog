import styled from "styled-components"

const Wrapper = styled.div `
  display: block;
  text-align: center;
  .bio__image {
    min-width: 50px;
    border-radius: 50%;
    margin:  1rem 0;
  }
  @media screen and (max-width: 780px) {
    .bio__image {
      min-width: 50px;
      border-radius: 50%;
      margin:  .5rem 0 1rem 0;
    }
  }
`

export default Wrapper
