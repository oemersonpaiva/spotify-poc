import styled, { css } from 'styled-components'

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    background-color: ${theme.colors.white[100]};
    box-shadow: inset 0px -1px 0px ${theme.colors.white};
    color: ${theme.colors.black};
    height: ${theme.sizes.navbar};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`
