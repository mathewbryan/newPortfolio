import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Navigation from "../components/navigation"
import NavigationButton from "../components/navigationButton"

const IndexPage = () => (
  <div>
    <Header/>
    <NavigationButton/>
    <SEO title="Home" />
  </div>  
)

export default IndexPage
