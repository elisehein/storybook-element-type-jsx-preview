import {
  ComponentWithElementProp,
  ComponentWithElementTypeProp
} from './Component';

import { Button } from './Button';

export default {
  title: 'Repro/Component',
  tags: ['autodocs'],
};

export const WithElementType = args => <ComponentWithElementTypeProp {...args} />;
WithElementType.args = {
  buttonElementType: Button,
};

export const WithElement = args => <ComponentWithElementProp {...args} />;
WithElement.args = {
  buttonElement: <Button label="Button" />
};
