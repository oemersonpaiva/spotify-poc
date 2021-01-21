import styled, { css } from 'styled-components'
import * as ButtonStyles from 'components/structure/Button/Button.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${theme.spacings.small};
    margin: ${theme.spacings.small} auto;
    max-width: ${theme.grid.container};
    width: 100%;

    ${ButtonStyles.Wrapper} {
      &:first-child {
        margin-right: ${theme.spacings.medium};
      }
    }
  `}
`
