import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('render clear theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
