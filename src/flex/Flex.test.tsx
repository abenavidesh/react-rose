import React from 'react';
import { render } from '@testing-library/react';
import Flex from './Flex';

describe('Flex', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Flex>
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
    );

    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });

  it('applies default classes correctly', () => {
    const { container } = render(
      <Flex>
        <div>Item</div>
      </Flex>
    );

    const div = container.firstChild;
    expect(div).toHaveClass('flex');
    expect(div).toHaveClass('flex-row');
    expect(div).toHaveClass('justify-start');
    expect(div).toHaveClass('items-stretch');
    expect(div).toHaveClass('flex-nowrap');
    expect(div).toHaveClass('gap-4');
    expect(div).toHaveClass('bg-transparent');
    expect(div).toHaveClass('text-black');
  });

  it('applies custom classes correctly', () => {
    const { container } = render(
      <Flex 
        direction="column"
        justify="center"
        align="center"
        wrap="wrap"
        gap="gap-8"
        bgColor="bg-white"
        textColor="text-blackpink-black"
        className="custom-class"
      >
        <div>Item</div>
      </Flex>
    );

    const div = container.firstChild;
    expect(div).toHaveClass('flex');
    expect(div).toHaveClass('flex-column');
    expect(div).toHaveClass('justify-center');
    expect(div).toHaveClass('items-center');
    expect(div).toHaveClass('flex-wrap');
    expect(div).toHaveClass('gap-8');
    expect(div).toHaveClass('bg-white');
    expect(div).toHaveClass('text-blackpink-black');
    expect(div).toHaveClass('custom-class');
  });
});
