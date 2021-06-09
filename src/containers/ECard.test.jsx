/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ECard from './ECard';

describe('email setup page for sending eCard', () => {
  it('displays selected art + inputs + send button', async () => {
    render(<ECard />);

    const screenLoading = await screen.getByText('loading...');
    expect(screenLoading).toMatchSnapshot();
  });
});
