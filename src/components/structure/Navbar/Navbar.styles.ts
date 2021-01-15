import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    background-color: ${theme.colors.white[100]};
    box-shadow: inset 0px -1px 0px ${theme.colors.white[300]};
    color: ${theme.colors.black};
    height: ${theme.sizes.navbar};
    padding: 0 ${theme.spacings.medium};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`
