import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        {t('Профиль')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
