import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils, { act } from 'react-dom/test-utils'
import AuthenticationPage from '../Authentication'

describe('Authentication', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('passing test', () => {
      expect(true).toBeTruthy();
    })
    
    it('failing test', () => {
      expect(false).toBeFalsy();
    })

    it('have email address input', () => {
        act(() => {
            ReactDOM.render(<AuthenticationPage />, container)
        })
        const input = container.querySelector('input[name=email]')
        expect(input).toMatch()
    })
});