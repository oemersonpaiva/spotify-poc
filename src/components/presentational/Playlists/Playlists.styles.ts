import styled, { css } from 'styled-components'
import * as HeadingStyle from 'components/structure/Heading/Heading.styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-gap: ${theme.spacings.small};
    justify-items: center;
    margin: ${theme.spacings.medium};

    ${HeadingStyle.Wrapper} {
      grid-column: 1/-1;
      grid-row: 1/1;
      justify-self: flex-start;
    }
  `}
`
