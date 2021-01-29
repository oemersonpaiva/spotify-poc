import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white[100]};
    box-shadow: 0 0.5rem 1rem 0.1rem rgba(0, 0, 0, 0.3);
    border-radius: 0.4rem;
    padding: ${theme.spacings.xsmall};
    padding-right: 5rem;
    position: relative;
    max-width: 50rem;
    transition: box-shadow 0.3s;
    width: 100%;

    &:focus-within {
      box-shadow: 0 0.5rem 1rem 0.1rem rgba(0, 0, 0, 0.15);
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    border: none;
    color: ${theme.colors.black[100]};
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.family};
    outline: none;
    width: 100%;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    color: ${theme.colors.black[200]};
    padding: 1rem;
    width: 4rem;
    height: 4rem;
    position: absolute;
    right: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
  `}
`
