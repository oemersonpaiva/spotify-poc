import styled, { css } from 'styled-components'

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
