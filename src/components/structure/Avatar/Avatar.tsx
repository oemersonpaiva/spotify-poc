import * as S from './Avatar.styles'

export type AvatarProps = {
  src: string
  alt: string
}

const Avatar = ({ src, alt }: AvatarProps) => (
  <S.Wrapper>
    <S.AvatarImg src={src} alt={alt} />
  </S.Wrapper>
)

export default Avatar
