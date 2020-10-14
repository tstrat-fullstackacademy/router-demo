import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'

class Main extends React.Component {
  constructor() {
    super()

    this.state = {
      myVar: 'Travis',
    }
  }

  render() {
    console.log('Main props > ', this.props)
    return (
      <div id='app'>
        {/* Link and NavLink work the same way, NavLink just happens to also inclue the activeClassName Property thats useful for css */}
        <nav>
          <NavLink to='/' exact activeClassName='selected'>
            Home Page
          </NavLink>
          <NavLink to='/about' exact activeClassName='selected'>
            About Page
          </NavLink>
          <NavLink to='/dlsjafh' activeClassName='selected'>
            404 Page
          </NavLink>
        </nav>
        <main>
          {/* 
                Switch will find the first route that matches and use that route
                (does not allow multiple routes to match)

                This could be useful or could be in the way of what your app wants to do.
            
            */}
          <Switch>
            <Route
              path='/about'
              render={(routeProps) => (
                <About myVar={this.state.myVar} {...routeProps} />
              )}
            />
            <Route path='/:food' component={Home} />
            <Route path='/' component={NotFound} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Main
