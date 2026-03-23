import { describe, expect, it } from 'vitest'

import { renderWithProviders, screen } from '@/test/utils'

import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('renders with progressbar role', () => {
    renderWithProviders(<ProgressBar />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('has default aria attributes', () => {
    renderWithProviders(<ProgressBar />)
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuemin', '0')
    expect(bar).toHaveAttribute('aria-valuemax', '100')
    expect(bar).toHaveAttribute('aria-valuenow', '0')
    expect(bar).toHaveAttribute('aria-label', '로딩 중')  // default value
  })

  it('applies custom aria-label', () => {
    renderWithProviders(<ProgressBar aria-label="Uploading file" />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label', 'Uploading file')
  })

  it('reflects value in aria-valuenow', () => {
    renderWithProviders(<ProgressBar value={60} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '60')
  })

  it('clamps value below 0 to 0', () => {
    renderWithProviders(<ProgressBar value={-10} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })

  it('clamps value above 100 to 100', () => {
    renderWithProviders(<ProgressBar value={150} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('omits aria-valuenow when indeterminate', () => {
    renderWithProviders(<ProgressBar indeterminate />)
    expect(screen.getByRole('progressbar')).not.toHaveAttribute('aria-valuenow')
  })

  it('applies default size (md)', () => {
    renderWithProviders(<ProgressBar data-testid="bar" />)
    expect(screen.getByTestId('bar')).toHaveClass('h-2')
  })

  it('applies sm size class', () => {
    renderWithProviders(<ProgressBar data-testid="bar" size="sm" />)
    expect(screen.getByTestId('bar')).toHaveClass('h-1')
  })

  it('applies lg size class', () => {
    renderWithProviders(<ProgressBar data-testid="bar" size="lg" />)
    expect(screen.getByTestId('bar')).toHaveClass('h-3')
  })

  it('merges custom className', () => {
    renderWithProviders(<ProgressBar data-testid="bar" className="mt-4" />)
    expect(screen.getByTestId('bar')).toHaveClass('mt-4')
  })

  it('spreads additional HTML attributes', () => {
    renderWithProviders(<ProgressBar data-testid="bar" id="upload-progress" />)
    expect(screen.getByTestId('bar')).toHaveAttribute('id', 'upload-progress')
  })
})
