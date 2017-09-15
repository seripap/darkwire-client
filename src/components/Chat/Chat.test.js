import React from 'react'
import renderer from 'react-test-renderer'
import Chat from './index.js'

const sendSocketMessage = jest.fn()

test('Chat Component', () => {
  const component = renderer.create(
    <Chat sendSocketMessage={sendSocketMessage} />
  )
  const componentJSON = component.toJSON()

  expect(component).toMatchSnapshot()
  expect(componentJSON.children.length).toBe(2)
})
