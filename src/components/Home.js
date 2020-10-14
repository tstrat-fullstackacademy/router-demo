import React from 'react'

function Home(props) {
  console.log('Home Props > ', props)
  return (
    <div>
      <h1>This is the Home Page</h1>
      <p>Hopefully the url says '/home'</p>
      <button onClick={() => props.history.push('/about')}>About</button>
    </div>
  )
}

export default Home
