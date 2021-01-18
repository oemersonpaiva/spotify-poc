import { renderWithProviders } from 'utils/tests/helpers'
import PlaylistCard from './PlaylistCard'

describe('<PlaylistCard />', () => {
  it('should render default heading', () => {
    const { getByRole } = renderWithProviders(
      <PlaylistCard name="John Doe" thumbUrl="https://i.pravatar.cc/300" />
    )

    expect(getByRole('heading', { name: /john doe/i })).toBeInTheDocument()
  })
})
