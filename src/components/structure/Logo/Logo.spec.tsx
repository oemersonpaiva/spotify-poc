import { renderWithProviders } from 'utils/tests/helpers'
import Logo from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    const { getByLabelText } = renderWithProviders(<Logo />)

    expect(getByLabelText(/spotifood/i)).toBeInTheDocument()
    expect(getByLabelText(/spotifood/i)).toMatchSnapshot()
  })
})
