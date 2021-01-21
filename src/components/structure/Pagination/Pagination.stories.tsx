import { Meta, Story } from '@storybook/react/types-6-0'
import Pagination, { PaginationProps } from './Pagination'

export default {
  title: 'Structure/Pagination',
  component: Pagination,
  argTypes: {
    handleClickPrevious: { action: 'clicked' },
    handleClickNext: { action: 'clicked' }
  }
} as Meta

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
)
