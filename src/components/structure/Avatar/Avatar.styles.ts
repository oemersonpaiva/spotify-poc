import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.primary};
    border-radius: 50%;
    cursor: pointer;
    display: block;
    overflow: hidden;
    height: 3.5rem;
    width: 3.5rem;
  `}
`

export const AvatarImg = styled.img`
  height: 100%;
  width: 100%;
`
