import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Header/>
    <SEO title="Home" />
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
