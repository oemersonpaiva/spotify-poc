import { Meta, Story } from '@storybook/react/types-6-0'
import Avatar, { AvatarProps } from './Avatar'

export default {
  title: 'Structure/Avatar',
  component: Avatar
} as Meta

export const Default: Story<AvatarProps> = (args) => <Avatar {...args} />

Default.args = {
  alt: 'Username',
  src: 'https://i.pravatar.cc/300'
}
