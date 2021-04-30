import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

const MyPosts = ({ data }) =>{
  return (
    <Layout>
      <Header headerText="My Posts"/>
      <table>
        <thead>
          <tr>
            <th>Relative Path</th>
            <th>Size</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({node}) => (
            <tr key={node.id}>
              <td>{node.relativePath}</td>
              <td>{node.prettySize}</td>
              <td>{node.changeTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
} 

export const query = graphql`
  {
    allFile(sort: {fields: changeTime, order: ASC}) {
      edges {
        node {
          id
          prettySize
          relativePath
          changeTime(formatString: "ddd, MMM Do YYYY, h:mm:ss a z")
        }
      }
    }
  }
`

export default MyPosts

