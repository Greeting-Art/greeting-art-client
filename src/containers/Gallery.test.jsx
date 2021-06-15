/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Gallery from './Gallery';
import mockData from '../../fixtures/mock-data.json';
import { MemoryRouter } from 'react-router';

const server = setupServer(
  rest.get(
    'https://limitless-everglades-53305.herokuapp.com/gallery',
    (req, res, ctx) => {
      return res(ctx.json(mockData));
    }
  )
);

describe('art gallery container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a loading element', async () => {
    render(
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    );

    // const screenLoading = await screen.getByText('loading...');
    // return waitFor(() => {
    //   expect(screenLoading).toMatchSnapshot();
    // });
  });

  it('displays a list of images', async () => {
    render(
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    );
    const ul = await screen.findByRole('list', { name: 'artwork' });
    return waitFor(() => {
      expect(ul).toMatchSnapshot();
    });
  });
});
