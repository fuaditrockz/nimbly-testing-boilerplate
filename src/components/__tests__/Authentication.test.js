import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils, { act } from 'react-dom/test-utils'
import { shallow } from 'enzyme' 
import AuthenticationPage from '../Authentication'

describe('Authentication', () => {
    describe('user login', () => {
        it('when email is empty will not approval', () => {
            const component = shallow(<AuthenticationPage />)
        });
    });
});