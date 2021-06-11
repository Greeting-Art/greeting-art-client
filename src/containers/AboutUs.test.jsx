/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('about us page', () => {
  it('displays image and text info on dev team', async () => {
    render(<AboutUs />);

    // const screenLoading = await screen.getByText('loading...');
    // expect(screenLoading).toMatchSnapshot();
  });
});
