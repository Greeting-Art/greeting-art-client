/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';

describe('art gallery container', () => {
  it('displays a list of pieces of art', async () => {
    render(<Gallery />);

    // const screenLoading = await screen.getByText('loading...');
    // expect(screenLoading).toMatchSnapshot();

    const toECardButton = await screen.getByText('Send Art as eCard');
    expect(toECardButton).toMatchSnapshot();
  });
});
