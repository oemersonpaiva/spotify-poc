import { Meta, Story } from '@storybook/react/types-6-0'
import PlaylistCard, { PlaylistCardProps } from './PlaylistCard'

export default {
  title: 'structure/PlaylistCard',
  component: PlaylistCard
} as Meta

export const Default: Story<PlaylistCardProps> = (args) => (
  <PlaylistCard {...args} />
)

Default.args = {
  name: 'Username',
  thumbUrl: 'https://i.pravatar.cc/300'
}
