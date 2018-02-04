
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

```jsx
// Creating a style component
const Heading = props =>
  <Base
    is='h2'
    {...props}
    h2
    mt3
    mb2
  />
```

[MIT License](LICENSE.md)

[tachyons]: http://tachyons.io
[basscss]: http://basscss.com
