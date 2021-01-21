import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './Button.styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
  color?: 'primary' | 'secondary'
  icon?: JSX.Element
  iconLeft?: boolean
} & ButtonTypes

const Button = ({
  children,
  color = 'primary',
  iconLeft = true,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper color={color} hasIcon={!!icon} {...props}>
    {iconLeft && icon}
    {!!children && <span>{children}</span>}
    {!iconLeft && icon}
  </S.Wrapper>
)

export default Button
