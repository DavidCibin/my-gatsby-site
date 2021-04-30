import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: "purple", fontFamily: "Raleway" }}>
      <Link to="/contact">Contact Me</Link> 
      <Link to="/my-random-pic">A random pic</Link> 
      <Header headerText="Index: A place to be."/>
      Hello, friend.
    </div>
  )
}
