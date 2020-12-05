import * as S from './Heading.styles'

export type HeadingProps = {
  children: React.ReactNode
}

const Heading = ({ children }: HeadingProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default Heading
