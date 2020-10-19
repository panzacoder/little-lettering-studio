import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import Instagram from '../components/social/instagram'

import SEO from '../components/seo'

function IndexPage({ data }) {
  return (
    <div className="bg-ballerina h-screen w-screen flex">
      <SEO
        keywords={[`lettering`, `design`, `procreate`, `pensacola`]}
        title="The Little Lettering Studio"
      />

      <section className="flex text-center w-3/4 mx-auto pt-20">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="w-full">Little Lettering Studio</h1>
          <Instagram className="w-1/12" />
        </div>
        <Image
          fluid={data.marissaAndPiper.childImageSharp.fluid}
          className="flex-1 w-full"
          alt="A drawing of Marissa and her dog Piper"
        />
      </section>
    </div>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    marissaAndPiper: file(
      relativePath: { eq: "images/marissa-and-piper.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
