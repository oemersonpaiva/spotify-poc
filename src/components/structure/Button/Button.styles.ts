import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './Button'

type WrapperProps = { hasIcon: boolean } & Pick<ButtonProps, 'color'>

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.white[100]};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white[100]};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
    }

    span {
      &:last-child {
        margin-left: ${theme.spacings.xxsmall};
      }

      &:first-child {
        margin-right: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, hasIcon = false }) => css`
    border: none;
    border-radius: ${theme.spacings['2xxsmall']};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.black};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.font.sizes.small};
    line-height: 1;
    padding: ${theme.spacings.xxsmall};
    transition: all 0.2s ease-in;
    outline: none;
    text-decoration: none;

    &:hover {
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
    }

    ${!!color && wrapperModifiers[color](theme)};
    ${hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`
