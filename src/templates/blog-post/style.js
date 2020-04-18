import styled from "styled-components"

const Wrapper = styled.div `
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-weight: 400;
  }

  a {
    color: #006e54;
    text-decoration: none;
  }

  p {
    line-height: 2;
  }

  h1{
    margin: 4rem auto;
    color: #006e54;
  }

  h2 {
    font-size: 1.4rem;
    margin: 2.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #006e54;
  }

  h3 {
    position: relative;
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
    padding: 1rem;
    &:before {
          content: "";
          width: 3px;
          height: 100%;
          background: #006e54;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border-radius: 5px;
          opacity: 0.8;
        }
  }

  .article {
    margin-top: 3rem;
    padding-top: 4rem;
  }

  .article__header-date {
    text-align: center;
  }

  .article__header-title {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
  }

  .nav__lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 2rem 0;
  }

  @media screen and (max-width: 780px) {
    .article {
      margin-top: 3rem;
      padding-top: 2rem;
    }

    h1{
      margin: 3rem auto;
    }

    h2 {
      fon-size: 1.3rem;
      margin: 2rem 0;
    }
    
    h3 {
      font-size: 1.1rem;
      padding: .5rem 1rem;
    }

  }
`

export default Wrapper
