import { renderWithProviders } from 'utils/tests/helpers'
import PlaylistCard from './PlaylistCard'

describe('<PlaylistCard />', () => {
  it('should render default heading', () => {
    const { getByRole } = renderWithProviders(
      <PlaylistCard
        id="001"
        name="John Doe"
        external_urls="externalUrl"
        images={['https://i.pravatar.cc/300']}
      />
    )

    expect(getByRole('heading', { name: /john doe/i })).toBeInTheDocument()
  })
})
