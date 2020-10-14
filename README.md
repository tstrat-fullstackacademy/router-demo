# Intro to React Router

## Hooking up Router to React

There are two ways to get routing settup in a single page app.

1. Modify the url with the document # finder. Use that to bounce around the site
2. Use the browser history API (basically the same but no # - some additional work with backend servers)

Since we can choose between the two routers, when hooking them up, its often a convention to alias them with just `Router` so they can be interchangable based on need.

```js
import { HashRouter as Router } from 'react-router-dom'
```

Typically, we want the entire app to be part of this router scheme. The app should update based on url changes, so to make sure its connected to the entire react app, we put the router at as high a level as possible - to "wrap" around the components that are going to be affected by the router.

We can do it earliest during the `RenderDOM.render()` call, or within the main components render function

```js
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
```

or

```js
// in the App component
render() {
    return (
        <Router>
            <div> ... content of App ...</div>
        </Router>
    )
}
```

Great! Now we are hooked up and ready to begin!

## Routes!

When the url bar is at a specific place we want certain components to be visible. React Router gives us a component to handle this. Note, `Route` is not a **ROUTER**

```js
import { Route } from 'react-router-dom'
```

Now in order to let router know which component to render when, we have two properties to set on the `Route` component. `path` tries to find a match with the url. If it does match it will render the `component` prop.

```js
<Rotue path='/about' component={About}>
```

## Links (Replacing the <a>)

Since we are in a SPA, we cant really make good use of the typical anchor tag. Its default effect causes a page refresh, which resets state in both React and furthermore in Redux 😱

Instead, router provides us with the `Link` and `NavLink` components. The difference between these two come down to some styling benefits of NavLinks but are both able to be styled in css with the 'a' selector. The `Link` will take a prop called `to` which tells the router to update the url and reset the ui

```js
<Link to='about'>Text for the Link HERE</Link>
```

### Fuzzy matching and Switch!

`/home` will match

- `/home`
- `/home_depot`
- `/home/1`
- `/home/and/another`
- `/homey`

If you only want it to match `/home` exactly use the `exact` keyword

```js
<Route path='/home' exact component={Home}>
```

But what about multiple routes?

```js
<Route path='/home' component={Home}>
<Route path='/home/next' component={HomeNext}>
```

When we want to have one route and not the other we can use `Switch` and ordering instead of relying soley on exact

```js
<Switch>
    <Route path='/home/next' component={HomeNext}>
    <Route path='/home' component={Home}>
</Switch>
```

The above code will match `home/next` to HomeNext first and not Home at all. This way we dont need to say `exact` on the second part. Keeps things organized like a switch/case in javascript

## Route has some cool Props from being a react router component!

- match
  - How this particular route matches the url
  - props.match.params
- history
  - has cool methods to controll moving through the browser programatically
  - histoy.push
  - history.goBack / forward
- location
  - info about the address, where requests are comming from, what devices people are using.
  - Really cool but niche.

## Passing our own Props to the router

`component` doesnt really let us pass our own props to routes. If we want to do that, we need to be a bit more explicit and tell the `Route` HOW to _render_ our component

```js
<Route path='/' render={() => <MyComponent myProp='here' />}>
```

You can spread props out `{...props}`, pass them in directly like above. If you do this, you dont have access to the props that Router gives the component. If we need them we should add them back in

```js
<Route path='/' render={ routerProps => <MyComponent {...routerProps} />}>
```
