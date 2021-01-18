import { renderWithProviders } from 'utils/tests/helpers'
import Avatar from './Avatar'

describe('<Avatar />', () => {
  it('should render the heading', () => {
    const { getByRole } = renderWithProviders(
      <Avatar src="https://i.pravatar.cc/300" alt="User" />
    )
    const avatarRender = getByRole('img', { name: /user/i })

    expect(avatarRender).toBeInTheDocument()
    expect(avatarRender).toHaveAttribute('alt', 'User')
    expect(avatarRender).toMatchSnapshot()
  })
})
