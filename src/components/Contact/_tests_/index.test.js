import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup); 

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<ContactForm/>);
    });

     // snapshot test
     it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
      });

      // text component
      it('matches text component', () => {
        const { getByTestId } = render(<ContactForm/>)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
      });

      // button component
      it('matches text component', () => {
        const { getByTestId } = render(<ContactForm/>)
        expect(getByTestId('buttontag')).toHaveTextContent('Submit')
      });


})