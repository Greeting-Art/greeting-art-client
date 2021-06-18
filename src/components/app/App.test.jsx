/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

jest.mock('../../containers/ArtGenerator', () => () => <div>hey</div>);

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
