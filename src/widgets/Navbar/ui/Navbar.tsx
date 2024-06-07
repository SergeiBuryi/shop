import { useTranslation } from 'react-i18next';
import * as cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwither } from 'widgets/ThemeSwither';
import LoginUserIcon from 'shared/assets/icons/login_user.svg';
import FavoritesIcon from 'shared/assets/icons/favorites.svg';
import CartIcon from 'shared/assets/icons/cart.svg';
import LogoIcon from 'shared/assets/icons/logo.svg';
import CatalogIcon from 'shared/assets/icons/catalog.svg';
import ComparisonIcon from 'shared/assets/icons/comparison.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwither } from 'widgets/LangSwither';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={classNames(cls.Navbar,{},[className])}>
            <div className={cls.content_heading}>
                <LangSwither />
                <ThemeSwither />
            </div>
            <div className={cls.content_body}>
                <div className={cls.logo}>
                    <AppLink to={'/'}>
                        <LogoIcon />
                    </AppLink>
                </div>



                
                <div className={cls.catalog}>
                    <Button
                        theme={ThemeButton.GREEN}
                        icon={<CatalogIcon />}
                    >
                        {t('catalog')}
                    </Button>
                </div>
                <div className={cls.comparison}>
                    <Button
                        theme={ThemeButton.GRAY}
                        icon={<ComparisonIcon />}
                    >
                        {t('comparison')}
                    </Button>
                </div>



                <div className={cls.links}>
                    <div className={cls.link}>
                        <LoginUserIcon />
                        <AppLink 
                            theme={AppLinkTheme.PRIMARY}
                        >
                            {t('login_account')}
                        </AppLink>
                    </div>
                    <div className={cls.link}>
                        <FavoritesIcon />
                        <AppLink 
                            theme={AppLinkTheme.PRIMARY}
                            to={'/favorites'}
                        >
                            {t('favorites')}
                        </AppLink>
                    </div>
                    <div className={cls.link}>
                        <CartIcon />
                        <AppLink 
                            theme={AppLinkTheme.PRIMARY}
                            to={'/cart'}
                        >
                            {t('cart')}
                        </AppLink>
                    </div>
                </div>
            </div>
        </div>
    );
};