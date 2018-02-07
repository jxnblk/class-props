import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types';

const omit = (obj, keys) => {
  const next = {}
  for (let key in obj) {
    if (keys.indexOf(key) > -1) continue
    next[key] = obj[key]
  }
  return next
}

const classnames = props => Object.keys(props)
  .filter(key => props[key] === true)
  .join(' ')

class Base extends Component {
  static propTypes = {
    className: PropTypes.string,
    is: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    is: 'div',
  }

  render () {
    const { is } = this.props
    const className = [
      this.props.className,
      classnames(this.props)
    ].join(' ').trim()
    const blacklist = [
      ...className.split(' '),
      'is'
    ]
    const props = omit(this.props, blacklist)

    return createElement(is, {
      ...props,
      className
    })
  }
}

export default Base
