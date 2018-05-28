
# class-props

React component for quickly applying multiple classNames – great for libraries like [Tachyons][tachyons] and [Basscss][basscss]

```sh
npm i class-props
```

```jsx
import React from 'react'
import Base from 'class-props'

const App = props => (
  <React.Fragment>
    <link ref='stylesheet' href='https://unpkg.com/basscss@8.0.2/css/basscss.min.css' />
    <Base px3 py4>
      <Base is='h1' h1>
        Hello
      </Base>
    </Base>
  </React.Fragment>
)
```

The `is` prop changes the underlying DOM element from a `div`. By creating a functional, stateless component with class props, you can re-use that component elsewhere without needing to define the class props again.

```jsx
// Creating a component with class props
const Heading = props =>
  <Base
    is='h2'
    {...props}
    h2
    mt3
    mb2
  />
```

You can also pass boolean values to class props, so that they can be toggled on and off:

```jsx
const Button = props => <Base is="button" {...props} btn btn-primary />

class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      red: true,
    }
  }

  render() {
    const state = this.state

    return (
      <div>
        <Button onClick={e => this.setState({ red: !state.red })}>
          Toggle Red
        </Button>
        <Base red={state.red ? true : undefined}>Example</Base>
      </div>
    )
  }
}
```

Using `state.red ? true : undefined` rather than `state.red` alone avoids  having a `red="true"` passed down the HTML (which probably isn’t your intent and will also cause a React to log a warning).

[MIT License](LICENSE.md)

[tachyons]: http://tachyons.io
[basscss]: http://basscss.com
