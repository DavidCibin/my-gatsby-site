import React from 'react';
import Header from "../components/header"
import Layout from "../components/layout"

export default function MyRandomPic() {
  return (
    <Layout>
      <Header headerText="It's a random picture!" />
      <img
        src="https://picsum.photos/500/700"
        alt="A placeholder for something great to come!"
      />
    </Layout>
  )
}