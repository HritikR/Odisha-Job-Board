import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Homepage', () => {
  it('Header', () => {
    render(<Home/>)

    const header = screen.getByText('Odisha Job Board')

    expect(header).toBeInTheDocument()
  })

  it('Tabs', () => {
    render(<Home/>)
    const tabs = screen.getByTestId('tabs')

    expect(tabs).toBeInTheDocument()
  })

  it('Latest Notifications', () => {
    render(<Home/>)
    const latest = screen.getByTestId('latest')

    expect(latest).toBeInTheDocument()
  })

  it('Old (Archive) Notifications', () => {
    render(<Home/>)
    const archive = screen.getByTestId('archive')

    expect(archive).toBeInTheDocument()
  })

  it('Footer', () => {
    render(<Home/>)
    const footer = screen.getByText('© Odisha Job Board 2022 - All rights reserved')

    expect(footer).toBeInTheDocument()
  })
})
