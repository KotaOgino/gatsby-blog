import styled from "styled-components"

const Wrapper = styled.div `
  display: block;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
  border: 1px dashed #006e54;
  width: 80%;
  .bio__image {
    min-width: 50px;
    border-radius: 50%;
  }
  p {
    margin: 0 auto;
    padding: .7rem 0;
  }

  @media screen and (max-width: 780px) {
    .bio__image {
      min-width: 50px;
      border-radius: 50%;
      margin:  .5rem 0 1rem 0;
    }
    p {
      font-size: 10px;
    }
  }
`

export default Wrapper
