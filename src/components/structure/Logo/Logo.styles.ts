import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black[200]};
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-weight: ${theme.font.bold};
    transition: color 0.2s linear;

    &:hover {
      color: ${theme.colors.primary};
    }

    svg {
      fill: currentColor;
      height: 2.4rem;
      width: 2.4rem;
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
