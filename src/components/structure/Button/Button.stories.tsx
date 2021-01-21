import { Meta, Story } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from './Button'
import { ReactComponent as LogoIcon } from 'assets/svgs/logo.svg'

export default {
  title: 'Structure/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Play Now'
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  children: 'Play Now',
  icon: <LogoIcon />
}

export const AsLink: Story<ButtonProps> = (args) => <Button {...args} />

AsLink.args = {
  children: 'Play Now',
  as: 'a',
  href: '/link'
}
