import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import HomePage from './HomePage';

describe('<HomePage />', () => {

    it('should say \'simple react tabs\'', () => {
        const wrapper = shallow(<HomePage />);
        const actual = wrapper.find('h1').text();
        const expected = 'simple react tabs';

        expect(actual).to.equal(expected);
    });

});
