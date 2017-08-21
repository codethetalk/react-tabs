import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Home from './home'

describe('<Home />', () => {

    it('should say \'simple react tabs\'', () => {
        const wrapper = shallow(<Home />)
        const actual = wrapper.find('h1').text()
        const expected = 'simple react tabs'

        expect(actual).to.equal(expected)
    })

})
