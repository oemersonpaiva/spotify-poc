import { Meta, Story } from '@storybook/react/types-6-0'
import { Playlist } from 'types/playlist'
import PlaylistCard from './PlaylistCard'

export default {
  title: 'Structure/PlaylistCard',
  component: PlaylistCard
} as Meta

export const Default: Story<Playlist> = (args) => <PlaylistCard {...args} />

Default.args = {
  name: 'Playlist Name',
  images: [{ url: 'https://picsum.photos/200' }]
}
