import { render, screen } from '@testing-library/react'
import App from './App'
import Profile from './components/Profile'
import Transfer from './components/Transfer'
import Mint from './components/Mint'

test('Pagetitle was rendered', () => {
  render(<App />)
  expect(screen.getByText(/Daoism Systems Front-end Engineer Technical Challenge/i)).toBeInTheDocument()
})

test('Profile was rendered', () => {
  render(<Profile />)
  expect(screen.getByText(/Profile:/i)).toBeInTheDocument()
})

test('Transfer was rendered', () => {
  render(<Transfer />)
  expect(screen.getByText(/Transfer:/i)).toBeInTheDocument()
})

test('Mint was rendered', () => {
  render(<Mint />)
  expect(screen.getByText(/Mint:/i)).toBeInTheDocument()
})
