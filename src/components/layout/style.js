import styled from "styled-components"

const Wrapper = styled.div `

  main{
    background-color: #fffeff;
    color: #16160e;
  }

  .wrap {
    max-width: 60%;
    margin: 0 auto;
  }

  @media screen and (max-width: 780px) {
    .wrap {
      max-width: 90%;
      margin: 0 auto;
    }
  }

  @media (prefers-color-scheme: dark) {
    main {
      background-color: #020411;
      color: #e4e4e4;
    }
  }
`

export default Wrapper
