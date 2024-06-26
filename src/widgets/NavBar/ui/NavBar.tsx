import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink
        to="/about"
        className={cls.mainLink}
        theme={AppLinkTheme.SECONDARY}
      >
        О проекте
      </AppLink>
      <AppLink to="" theme={AppLinkTheme.SECONDARY}>
        Главная
      </AppLink>
    </div>
  </div>
);
