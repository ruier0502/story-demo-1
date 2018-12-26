// import React from 'react';
// // import { storiesOf } from '@storybook/react';
// import { withKnobs, number } from '@storybook/addon-knobs';
// // import { specs, describe } from 'storybook-addon-specifications';
// import { Pagination } from '../components';
// import paginationDoc from '../components/Pagination/readme.md';
// // import expect from "expect";
// // import fn from '../tests/Pagination.test';

// import {storiesOf, describe, specs} from '../.storybook/__mocks__/facade';

// storiesOf('基础组件', module)
//   .addDecorator(story => <div style={{ marginTop: '50px' }}>{story()}</div>)
//   .addDecorator(withKnobs)
//   .add('Pagination', () => {
//     const totalPage = number('totalPage', 100);
//     const currentPage = number('currentPage', 45);
//     const maxDisplayNumber = number('maxDisplayNumber', 4);

//     const story = <Pagination totalPage={totalPage} page={currentPage - 1} maxDisplayNumber={maxDisplayNumber} />;
//     // specs(() => describe('Pagination', () => fn));
//     return story;
//   }, {
//     notes: { markdown: paginationDoc },
//   });

import React from "react";

import {mount} from "enzyme";
import expect from "expect";

debugger;


const stories = storiesOf('Button - CI JEST Sample', module);

stories.add('Hello World', function () {
  const helloWorldStory =
    <button onClick={action('Hello World')}>
      Hello World
    </button>;

  specs(() => describe('Hello World', function () {
    let output;
    beforeEach(function() {
      console.log('BEFORE EACH');
      output = mount(helloWorldStory);
    });

    afterEach(function() {
      console.log('AFTER EACH');
    });

    it('Should have the Hello World label', function () {
      expect(output.text()).toContain('Hello World');
    });

    it('Should have the Hello World label', function () {
      expect(output.text()).toContain('Hello World');
    });

  }));
  return helloWorldStory;
});

stories.add('Hello Earth', function () {
  const helloEarthStory =
    <button onClick={action('Hello Earth')}>
      Hello Earth
    </button>;

  specs(() => describe('Hello Earth', function () {
    it('Should have the Hello Earth label', function () {
      let output = mount(helloEarthStory);
      expect(output.text()).toContain('Hello Earth');
    });
  }));

  return helloEarthStory;
});
