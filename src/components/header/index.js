import React from "react"
import {Link} from "gatsby"
import Wrapper from "./style.js"

const Header = props => {
  console.log(props);
  return(
    <Wrapper>
          <h1 className="isHome">
            <Link style={{
                boxShadow: `none`,
                color: `inherit`
              }} to={`/`}>
              okitsu's blog
            </Link>
          </h1>
    </Wrapper>
  )
}

export default Header
