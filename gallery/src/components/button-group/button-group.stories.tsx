import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonGroup from '../../../../binyal/src/components/button/button-group';
import Button from '../../../../binyal/src/components/button';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    direction: {
      name: 'Direction',
      description: 'Set the direction of the flexible items',
      defaultValue: 'row',
      options: ['row', 'col'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof ButtonGroup>;

const TemplatePrimary: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button>I love Binyal</Button>
    <Button>I love Binyal</Button>
    <Button>I love Binyal</Button>
  </ButtonGroup>
);

export const Primary = TemplatePrimary.bind({});
Primary.args = {};

const TemplateFlat: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button style={Button.style.flat}>I love Binyal</Button>
    <Button style={Button.style.flat}>I love Binyal</Button>
    <Button style={Button.style.flat}>I love Binyal</Button>
  </ButtonGroup>
);

export const Flat = TemplateFlat.bind({});
Flat.args = {};

const TemplateWarning: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button style={Button.style.warning}>I love Binyal</Button>
    <Button style={Button.style.warning}>I love Binyal</Button>
    <Button style={Button.style.warning}>I love Binyal</Button>
  </ButtonGroup>
);

export const Warning = TemplateWarning.bind({});
Warning.args = {};

const TemplateDanger: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button style={Button.style.danger}>I love Binyal</Button>
    <Button style={Button.style.danger}>I love Binyal</Button>
    <Button style={Button.style.danger}>I love Binyal</Button>
  </ButtonGroup>
);

export const Danger = TemplateDanger.bind({});
Danger.args = {};

const TemplateOutlinePrimary: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button style={Button.style.primary} outline>
      I love Binyal
    </Button>
    <Button style={Button.style.primary} outline>
      I love Binyal
    </Button>
    <Button style={Button.style.primary} outline>
      I love Binyal
    </Button>
  </ButtonGroup>
);

export const OutlinePrimary = TemplateOutlinePrimary.bind({});
OutlinePrimary.args = {};

const TemplateOutlineFlat: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button style={Button.style.flat} outline>
      I love Binyal
    </Button>
    <Button style={Button.style.flat} outline>
      I love Binyal
    </Button>
    <Button style={Button.style.flat} outline>
      I love Binyal
    </Button>
  </ButtonGroup>
);

export const OutlineFlat = TemplateOutlineFlat.bind({});
OutlineFlat.args = {};

const TemplateOutlineWarning: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button style={Button.style.warning} outline>
      I love Binyal
    </Button>
    <Button style={Button.style.warning} outline>
      I love Binyal
    </Button>
    <Button style={Button.style.warning} outline>
      I love Binyal
    </Button>
  </ButtonGroup>
);

export const OutlineWarning = TemplateOutlineWarning.bind({});
OutlineWarning.args = {};

const TemplateOutlineDanger: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button style={Button.style.danger} outline>
      I love Binyal
    </Button>
    <Button style={Button.style.danger} outline>
      I love Binyal
    </Button>
    <Button style={Button.style.danger} outline>
      I love Binyal
    </Button>
  </ButtonGroup>
);

export const OutlineDanger = TemplateOutlineDanger.bind({});
OutlineDanger.args = {};
