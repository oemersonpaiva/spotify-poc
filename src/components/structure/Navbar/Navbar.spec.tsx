import { renderWithProviders } from 'utils/tests/helpers'
import Navbar from 'components/structure/Navbar'

describe('<Navbar />', () => {
  it('should render default heading', () => {
    const { getByRole, getByLabelText } = renderWithProviders(
      <Navbar username="John Doe" avatarUrl="https://i.pravatar.cc/300" />
    )

    expect(getByLabelText(/spotifood/i)).toBeInTheDocument()
    expect(getByRole('img', { name: /john doe/i })).toBeInTheDocument()
  })
})
