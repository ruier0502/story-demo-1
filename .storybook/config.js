import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { configure as enzymeConfigure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzymeConfigure({ adapter: new Adapter() });

addDecorator(
  withOptions({
    name: 'terrance\'s storybook',
    goFullScreen: false,
    showAddonsPanel: true,
    showSearchBox: false
    // more configuration here
  })
);
addDecorator(withInfo);
addDecorator(withNotes);

function loadStories() {
  require('../stories/index.js');
  require('../stories/example.js');
  require('../stories/test.js');
  // You can require as many stories as you need.
}
configure(loadStories, module);