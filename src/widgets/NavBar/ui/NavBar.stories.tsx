import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NavBar } from './NavBar';

export default {
  title: 'widgets/NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavBar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [StoreDecorator({
  user: { authData: {} },
})];
