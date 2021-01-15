import { Meta, Story } from '@storybook/react/types-6-0'
import Navbar, { NavbarProps } from '.'

export default {
  title: 'structure/Navbar',
  component: Navbar
} as Meta

export const Default: Story<NavbarProps> = (args) => <Navbar {...args} />

Default.args = {
  username: 'Username',
  avatarUrl: 'https://i.pravatar.cc/300'
}
