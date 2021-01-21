import { PlaylistCard } from 'components/presentational'
import { Heading } from 'components/structure'
import { Playlist } from 'types/playlist'
import * as S from './Playlists.styles'

export type PlaylistsProps = {
  playlists: Playlist[]
  title: string
}

const Playlists = ({ playlists, title }: PlaylistsProps) => (
  <S.Wrapper>
    <Heading>{title}</Heading>
    {playlists.map(({ id, name, images, external_urls }) => (
      <PlaylistCard
        key={id}
        id={id}
        name={name}
        images={images}
        external_urls={external_urls}
      />
    ))}
  </S.Wrapper>
)

export default Playlists
