/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutUs from './AboutUs';

describe('about us page', () => {
  it('displays image and text info on dev team', async () => {
    render(<MemoryRouter>
      <AboutUs />
    </MemoryRouter>);

    // const screenLoading = await screen.getByText('loading...');
    // expect(screenLoading).toMatchSnapshot();
  });
});
