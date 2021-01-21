import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from './Heading'

type WrapperProps = Pick<HeadingProps, 'large' | 'center'>

const wrapperModifiers = {
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes['2xxlarge']};
  `,
  center: () => css`
    text-align: center;
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, large, center }) => css`
    color: ${theme.colors.black[200]};
    font-size: ${theme.font.sizes.xxlarge};

    ${large && wrapperModifiers.large(theme)};
    ${center && wrapperModifiers.center()};
  `}
`
