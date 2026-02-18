import { describe, it, expect } from 'vitest'
import { renderWithProviders, screen } from './test/utils'
import App from './App'

describe('App', () => {
  it('renders Mongle UI title', () => {
    renderWithProviders(<App />)
    expect(screen.getByText(/Mongle UI/i)).toBeInTheDocument()
  })

  it('displays color swatches', () => {
    renderWithProviders(<App />)
    expect(screen.getByText('Coral')).toBeInTheDocument()
    expect(screen.getByText('Periwinkle')).toBeInTheDocument()
    expect(screen.getByText('Mint')).toBeInTheDocument()
  })
})
