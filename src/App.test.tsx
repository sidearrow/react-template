import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

test('Test App Component', () => {
  const app = render(<App />)
  screen.debug()
})
