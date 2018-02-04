import test from 'ava'
import React from 'react'
import { create } from 'react-test-renderer'
import Base from './index'

const render = el => create(el).toJSON()

test('renders', t => {
  const json = render(
    <Base />
  )
  t.snapshot(json)
})

test('adds boolean props as classNames and removes props', t => {
  const json = render(
    <Base id='hi' mb2 block bg-blue />
  )
  t.is(json.props.className, 'mb2 block bg-blue')
  t.is(json.props.id, 'hi')
  t.is(json.props.mb2, undefined)
  t.is(json.props.block, undefined)
  t.is(json.props['bg-blue'], undefined)
})

test('is prop changes the underlying DOM element', t => {
  const json = render(
    <Base is='h1' />
  )
  t.is(json.type, 'h1')
  t.is(json.props.is, undefined)
})
