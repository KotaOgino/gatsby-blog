import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const {site} = useStaticQuery(graphql`
    query LayoutQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          description
          author {
            name
            summary
          }
        }
      }
    }
  `)
  return site.siteMetadata
}
