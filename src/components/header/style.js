import styled from "styled-components"

const Wrapper = styled.div `

  .isHome {
    display: block;
    background: linear-gradient(to bottom, #a6d900 0%, #ff4454 100%);
    opacity: 0.5;
    animation: huerotator 3s infinite alternate;
    font-size: 3rem;
    padding: 8rem 0;
    margin: 0;
    background-color: gray;
    text-align:center;
  }

  @keyframes huerotator {
  0% {
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
    }

  100% {
    -webkit-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
    }
  }

  .description {
    display: block;
    padding: 2rem 0;
    font-size: 1rem;
  }

  .notHome {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    padding: 1rem 0;
    margin: 0;
    background-color: #fffeff;
    text-align: center;
    border-bottom: 1px solid #eaf4fc;
  }

  .notHome a {
    font-weight: 700;
    font-size: 1rem;
    color: #006e54;
    text-decoration: none;
    box-shadow: none;
  }

  @media (prefers-color-scheme: dark) {
    .isHome {
      display: block;
      color: #fffeff;
      background: linear-gradient(to bottom, #4d4c61 0%, #1f3134 100%);
      opacity: 1;
      animation: huerotator 3s infinite alternate;
      font-size: 3rem;
      padding: 8rem 0;
      margin: 0;
      background-color: gray;
      text-align:center;
    }

    .notHome {
      background-color: #020411;
    }
  }

    @media screen and (max-width: 780px) {
      .isHome {
        font-size: 2rem;
        padding: 4rem 0 3rem 0;
      }
    }
    
}
`

export default Wrapper
