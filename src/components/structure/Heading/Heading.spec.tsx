import { renderWithTheme } from 'utils/tests/helpers'
import Heading from 'components/structure/Heading'

describe('<Heading />', () => {
  it('should render default heading', () => {
    const { getByRole } = renderWithTheme(<Heading>Default Heading</Heading>)

    expect(
      getByRole('heading', { name: /default heading/i })
    ).toBeInTheDocument()
  })
})
