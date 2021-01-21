import { Meta, Story } from '@storybook/react/types-6-0'
import SearchField, { SearchFieldProps } from './SearchField'

export default {
  title: 'Structure/SearchField',
  component: SearchField,
  argTypes: {
    placeholder: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<SearchFieldProps> = (args) => (
  <SearchField {...args} />
)

Default.args = {
  placeholder: 'Type your name'
}
