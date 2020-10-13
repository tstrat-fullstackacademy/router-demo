import React from 'react'

class Main extends React.Component {
  constructor() {
    super()

    this.state = {
      myVal: 42,
    }
  }

  render() {
    return (
      <div id='app'>
        <div className='state-container'>
          <h3>My Value is {this.state.myVal}</h3>
          <button
            onClick={() => this.setState({ myVal: this.state.myVal + 1 })}
          >
            Increment
          </button>
        </div>
        <nav>
          <a href='/home'>Home</a>
          <a href='/about'>About</a>
        </nav>
        <main>Not showing rotues yet...</main>
      </div>
    )
  }
}

export default Main
