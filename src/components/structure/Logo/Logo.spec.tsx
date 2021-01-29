import { renderWithProviders } from 'utils/tests/helpers'
import Logo from './Logo'

describe('<Logo />', () => {
  it('should render the heading', () => {
    const { getByLabelText } = renderWithProviders(<Logo />)

    expect(getByLabelText(/spotify poc/i)).toBeInTheDocument()
    expect(getByLabelText(/spotify poc/i)).toMatchSnapshot()
  })
})
