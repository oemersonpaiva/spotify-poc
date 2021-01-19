import { Playlist } from 'types/playlist'
import * as S from './PlaylistCard.styles'

const PlaylistCard = ({ name, images }: Playlist) => (
  <S.Wrapper>
    <S.ThumbWrapper>
      <img src={images[0].url} alt={name} loading="lazy" />
    </S.ThumbWrapper>
    <h3>{name}</h3>
  </S.Wrapper>
)

export default PlaylistCard
