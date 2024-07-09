import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('SideBar', () => {
  test('exist SideBar', () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('toggle', () => {
    renderWithTranslation(<SideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
