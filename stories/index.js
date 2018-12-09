import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import LinkTo from '@storybook/addon-links/react';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';

import { Button } from '@storybook/react/demo';

import './index.css';
import docs from './docs.md';

storiesOf('Button', module)
  .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>)
  .add('with text abc', () => <Button onClick={action('clicked')}>hello world!</Button>, {
    notes: { markdown: docs },
  })
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ), {
    notes: { markdown: docs },
  });

storiesOf('Select', module)
  .add('Index', () => (
    <select value="Index" onChange={linkTo('Select', e => e.currentTarget.value)}>
      <option>Index</option>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
    </select>
  ))
  .add('First', () => <LinkTo story="Index">Go back</LinkTo>)
  .add('Second', () => <LinkTo story="Index">Go back</LinkTo>)
  .add('Third', () => <LinkTo story="Index">Go back</LinkTo>);

storiesOf('Storybook Knobs', module)
  .addDecorator(withKnobs)
  .add('with a button', () => {
    const disabled = boolean('Disabled', false);
    return (
      <button
        disabled={disabled}
        className={disabled ? 'disabled' : ''}
      >
        {text('Label', `abc${disabled ? '(disabled)' : ''}`)}
      </button>
    );
  })
  .add('as dynamic variables', () => {
    const name = text('Name', 'Arunoda Susiripala');
    const age = number('Age', 89);
    const content = `I am ${name} and I'm ${age} years old.`;
    return (<div>{content}</div>);
  })
  .add('with color', () => {
    const label = 'Color';
    const defaultValue = '#ff00ff';
    const value = color(label, defaultValue);
    return (<div style={{ color: value }}>{value}</div>);
  });
