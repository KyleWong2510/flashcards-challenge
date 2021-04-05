import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header', () => {

	it('should render text', () => {
		const { getByText } = render(<Header />);

    const h1 = getByText('Study Up!');
    const p = getByText('A Flashcard Game');

    expect(h1).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  }); 
});
