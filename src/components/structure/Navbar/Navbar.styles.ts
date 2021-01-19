import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white[100]};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: inset 0px -1px 0px ${theme.colors.white[300]};
    color: ${theme.colors.black};
    height: ${theme.sizes.navbar};
    padding: 0 ${theme.spacings.medium};
    display: flex;
    align-items: center;
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    width: 100%;
  `}
`
