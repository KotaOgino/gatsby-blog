import React from "react"
import {Link} from "gatsby"
import Wrapper from "./style.js"

const BlogHeader = props => {

  const rootPath = `${__PATH_PREFIX__}/`
  let header;

  if (props.location.pathname === rootPath) {
    header = (
      <div>
        <h1 className="isHome">
          {props.title}
          <span className="description">{props.description}</span>
        </h1>
      </div>
  )
  } else {
    header = (<h3 className="notHome">
      <Link to={`/`}>
        {props.title}
      </Link>
    </h3>)
  }

  return(
    <Wrapper>
      {header}
    </Wrapper>
  )
}

export default BlogHeader
