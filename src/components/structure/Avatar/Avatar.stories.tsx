import { Meta, Story } from '@storybook/react/types-6-0'
import Avatar, { AvatarProps } from '.'

export default {
  title: 'structure/Avatar',
  component: Avatar
} as Meta

export const Default: Story<AvatarProps> = (args) => <Avatar {...args} />

Default.args = {
  alt: 'Username',
  src: 'https://i.pravatar.cc/300'
}
