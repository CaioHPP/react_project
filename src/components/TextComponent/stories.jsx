import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Porro ad odit doloremque commodi, possimus eveniet nemo consequuntur
    voluptatum enim, dolore aliquam, sunt dignissimos iure rem dolorum?
    Consectetur ex facere repellat.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
