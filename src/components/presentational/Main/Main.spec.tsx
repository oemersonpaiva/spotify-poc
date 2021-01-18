import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from 'utils/tests/helpers'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = renderWithProviders(<Main />)

    expect(screen.getByRole('heading', { name: /logado/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
