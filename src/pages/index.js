import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/herosection"
import ReactDom from "react-dom"

//ReactDom.render(<HeroSection />, document.getElementById("root"))

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
    </Layout>
  )
}

export default IndexPage
