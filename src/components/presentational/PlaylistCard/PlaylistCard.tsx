import * as S from './PlaylistCard.styles'

export type PlaylistCardProps = {
  name: string
  thumbUrl: string
}

const PlaylistCard = ({ name, thumbUrl }: PlaylistCardProps) => (
  <S.Wrapper>
    {name} {thumbUrl}
  </S.Wrapper>
)

export default PlaylistCard
