import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";


interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={"/about"} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
          О проекте
        </AppLink>
        <AppLink to={""} theme={AppLinkTheme.SECONDARY}>
          Главная
        </AppLink> 
      </div>
    </div>
  );
};


