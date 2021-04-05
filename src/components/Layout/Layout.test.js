import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Layout from './Layout';

describe('Layout', () => {

	it('should render a header and a child', () => {
		const { getByText } = render(<Layout>Child Component</Layout>);

    const headerH1 = getByText('Study Up!');
    const headerP = getByText('A Flashcard Game');
    const child = getByText('Child Component')

    expect(headerH1).toBeInTheDocument();
    expect(headerP).toBeInTheDocument();
    expect(child).toBeInTheDocument();
  }); 
});