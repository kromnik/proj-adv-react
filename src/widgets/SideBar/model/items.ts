import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routerConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SideBarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SideBarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: 'О проекте',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
  },
];
