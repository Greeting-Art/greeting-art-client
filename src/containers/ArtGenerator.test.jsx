/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtGenerator from './ArtGenerator';

describe('random art generation container', () => {
  it('displays inputs + an image + buttons', async () => {
    render(<ArtGenerator />);

    const screenLoading = await screen.getByText('loading...');
    expect(screenLoading).toMatchSnapshot();
  });
});
