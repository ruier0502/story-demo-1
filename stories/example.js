import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import Pagination from '../components/Pagination';
import paginationDoc from '../components/Pagination/readme.md';

storiesOf('Stone UI', module)
  .addDecorator(story => <div style={{ marginTop: '50px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .add('Pagination', () => {
    const totalPage = number('totalPage', 100);
    const currentPage = number('currentPage', 45);
    const maxDisplayNumber = number('maxDisplayNumber', 4);

    return (<Pagination totalPage={totalPage} page={currentPage - 1} maxDisplayNumber={maxDisplayNumber} />);
  }, {
    notes: { markdown: paginationDoc },
  });
