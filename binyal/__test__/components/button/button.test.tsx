import React from 'react';
import { render } from '@testing-library/react';

import Button from '../../../src/components/button/button';

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Button>Test button</Button>);
  });
});
