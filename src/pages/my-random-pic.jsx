import React from 'react';
import Header from "../components/header"

export default function MyRandomPic() {
  return (
    <div>
      <Header headerText="It's a random picture!" />
      <img
        src="https://picsum.photos/500/700"
        alt="A placeholder for something great to come!"
      />
    </div>
  )
}