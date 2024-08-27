import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to="/about"
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('О проекте')}
        </AppLink>
        <AppLink to="" theme={AppLinkTheme.SECONDARY}>
          {t('Главная')}
        </AppLink>
      </div>
    </div>
  );
};