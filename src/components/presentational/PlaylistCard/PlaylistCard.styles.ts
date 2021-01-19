import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.white[100]};
    color: ${theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    max-width: 270px;
  `}
`

export const ThumbWrapper = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
`
