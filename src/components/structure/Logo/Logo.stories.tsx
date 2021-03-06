import { Meta, Story } from '@storybook/react/types-6-0'
import Logo from './Logo'

export default {
  title: 'Structure/Logo',
  component: Logo
} as Meta

export const Default: Story = (args) => <Logo {...args} />
