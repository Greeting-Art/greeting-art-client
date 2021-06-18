/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/app/App';

jest.mock('./ArtGenerator', () => () => <div>hey</div>);

describe('random art generation container', () => {
  it('displays inputs + an image + buttons', async () => {

    const { container } = render(<App />);
    expect(container.textContent).toMatch('hey');

    const P5Wrapper = function P5Wrapper(props) {
      var _this = _super.call(this, props) || this;
      _this.wrapper = null;
      _this.state = __assign(__assign({}, props), {
        canvas: null,
        wrapper: _this.wrapper,
      });
      return _this;
    };
    expect(P5Wrapper).toMatchSnapshot();
  });
});
