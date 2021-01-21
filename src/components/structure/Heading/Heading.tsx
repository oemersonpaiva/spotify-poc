import * as S from './Heading.styles'

export type HeadingProps = {
  as?: React.ElementType
  center?: boolean
  children: React.ReactNode
  large?: boolean
}

const Heading = ({
  as,
  children,
  center = false,
  large = false
}: HeadingProps) => (
  <S.Wrapper large={large} as={as} center={center}>
    {children}
  </S.Wrapper>
)

export default Heading
