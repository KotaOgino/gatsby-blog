/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Wrapper from "./style.js"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/okitsu_icon.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <Wrapper>
      <Image
        className="bio__image"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
      />
      <p className="bio__title">
        ブログの主：<strong>{author.name}</strong>
      </p>
      <p>
        職業：Webエンジニア
      </p>
      <p>
        好きな日本酒：空（愛知）・新政（秋田）
      </p>
      <p className="bio__last">
        愛車：  Tracer900GT(2018)
      </p>
    </Wrapper>
  )
}

export default Bio
