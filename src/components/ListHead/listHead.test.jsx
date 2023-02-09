import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ListHead } from './ListHead';

describe('ListHead', () => {
  it('should render the correct elements', () => {
    render(<ListHead />);

    expect(screen.getByText('Flag')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('Region')).toBeInTheDocument();

    expect(screen.getByTestId('SortIcon')).toBeInTheDocument();
  });

  it('should call the nameButtonClicked function when clicked', () => {
    const nameButtonClicked = jest.fn();

    render(<ListHead nameButtonClicked={nameButtonClicked} />);

    fireEvent.click(screen.getByTestId('SortIcon'));

    expect(nameButtonClicked).toHaveBeenCalledTimes(1);
  });

  it('should display the correct sort text when nameAscending is true', () => {
    render(<ListHead nameAscending={true} />);

    expect(screen.getByText("Sort by name (ascending)")).toBeInTheDocument();
  });

  it('should display the correct sort text when nameAscending is false', () => {
    render(<ListHead nameAscending={false} />);

    expect(screen.getByText("Sort by name (descending)")).toBeInTheDocument();
  });  
});