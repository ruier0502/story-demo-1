import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';

storiesOf('Interaction test', module)
  .add('Button test', () => {
    const story = (
      <button onClick={action('Hello World')}>
        Hello World
      </button>
    );

    specs(() => describe('Hello World', () => {
      it('Should have the Hello World label', () => {
        const output = mount(story);
        expect(output.text()).toContain('Hello World');
      });
    }));

    return story;
  });
