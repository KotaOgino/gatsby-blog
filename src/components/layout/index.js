import React from "react"
import {Link} from "gatsby"
import Wrapper from "./style.js"
import {useSiteMetadata} from "../datas"

const Layout = ({location, title, children}) => {
  const {description} = useSiteMetadata();
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (<div><h1 className="isHome">
      <Link style={{
          boxShadow: `none`,
          color: `inherit`
        }} to={`/`}>
        {title}
      </Link>
      <span className="description">{description}</span>
    </h1>
    </div>
  )
  } else {
    header = (<h3 className="notHome"
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0
      }}>
      <Link style={{
          boxShadow: `none`,
          color: `inherit`
        }} to={`/`}>
        {title}
      </Link>
    </h3>)
  }
  return (<div>
    <Wrapper>
      <header>{header}</header>
      <main>
      <div className="wrap">
      {children}
      </div>
      </main>
    </Wrapper>
  </div>)
}

export default Layout
