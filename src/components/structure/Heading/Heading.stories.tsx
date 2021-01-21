import { Meta, Story } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from './Heading'

export default {
  title: 'Structure/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Heading Content'
}
