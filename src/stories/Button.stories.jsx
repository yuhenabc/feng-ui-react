import React from 'react'

import { Button } from '../packages/Button/src'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
  },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}

