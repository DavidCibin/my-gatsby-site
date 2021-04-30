import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Header headerText="Index: A place to be."/>
      Hello, friend.
    </Layout>
  )
}
