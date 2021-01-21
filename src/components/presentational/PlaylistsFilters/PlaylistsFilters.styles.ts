import styled, { css } from 'styled-components'
import * as ButtonStyles from 'components/structure/Button/Button.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(5, minmax(150px, 1fr));
    grid-gap: ${theme.spacings.small};
    justify-items: center;
    max-width: ${theme.grid.container};
    margin: ${theme.spacings.medium} auto;
    width: 100%;
  `}
`

export const SearchFieldWrapper = styled.div`
  ${({ theme }) => css`
    grid-column: 1/-1;
    grid-row: 1/1;
    justify-self: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${theme.spacings.xsmall} 0;

    ${ButtonStyles.Wrapper} {
      margin-left: ${theme.spacings.medium};
    }
  `}
`
