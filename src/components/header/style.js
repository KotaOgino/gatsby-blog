import styled from "styled-components"

const Wrapper = styled.div `
  .isHome{
    background: linear-gradient(to bottom, #a6d900 0%, #ff4454 100%);
    opacity: 0.5;
    animation: huerotator 3s infinite alternate;
    padding: 10rem 0;
    margin-top: 0;
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
`
