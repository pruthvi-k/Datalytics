import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders without errors', () => {
    render(<App />);
    // No error occurred during rendering
  });

  test('displays the title correctly', () => {
    render(<App />);
    const titleElement = screen.getByText('Datalytics');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the SWResources component', () => {
    render(<App />);
    const swResourcesElement = screen.getByTestId('sw-resources');
    expect(swResourcesElement).toBeInTheDocument();
  });
});
