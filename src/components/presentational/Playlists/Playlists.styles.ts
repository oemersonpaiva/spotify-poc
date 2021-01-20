import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-gap: ${theme.spacings.small};
    justify-items: center;
    margin: ${theme.spacings.medium};
  `}
`
