import React from 'react'

import SEO from '../components/seo'

function IndexPage() {
  return (
    <div className="bg-sand ">
      <SEO
        keywords={[`lettering`, `design`, `procreate`, `pensacola`]}
        title="Home"
      />

      <section className="flex flex-column text-center prose bg-ballerina">
        <h1 className="">Little Lettering Studio</h1>
      </section>
    </div>
  )
}

export default IndexPage
