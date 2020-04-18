import React from "react"
import BlogHeader from "../header"
import Wrapper from "./style.js"
import {useSiteMetadata} from "../datas"

const Layout = ({location, title, children}) => {
  const {description} = useSiteMetadata();

  return (
    <div>
    <Wrapper>
      <BlogHeader title={title} description={description} location={location} />
      <main>
      <div className="wrap">
      {children}
      </div>
      </main>
    </Wrapper>
  </div>
)
}

export default Layout
