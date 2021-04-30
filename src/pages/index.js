import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: "purple", fontFamily: "sans-serif" }}>
      <Link to="/contact">Contact Me</Link> 
      <Header headerText="Index: A place to be."/>
      Hello, friend.
    </div>
  )
}
