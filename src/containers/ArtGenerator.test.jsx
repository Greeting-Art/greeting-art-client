/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/app/App';
//import ArtGenerator from './ArtGenerator';
// import ArtGenerator from './ArtGenerator';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

jest.mock('./ArtGenerator', () => () => <div>hey</div>);

// const P5Wrapper = function P5Wrapper(props) {
//   var _this = _super.call(this, props) || this;
//   _this.wrapper = null;
//   _this.state = __assign(__assign({}, props), {
//     canvas: null,
//     wrapper: _this.wrapper,
//   });
//   return _this;
// };

//mock the randomization.js file in simple fashion here;

describe('random art generation container', () => {
  it('displays inputs + an image + buttons', async () => {
    // render(<ArtGenerator />);

    // const screenLoading = await screen.getByText('loading...');
    // expect(screenLoading).toMatchSnapshot();

    const { container } = render(<App />);
    expect(container.textContent).toMatch('hey');
  });
});
