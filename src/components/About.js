import React from 'react'

function About(props) {
  console.log('About Props > ', props)
  return (
    <div>
      <h1>This is the About Page</h1>
      <p>Hopefully the url says '/about'</p>
    </div>
  )
}

export default About
