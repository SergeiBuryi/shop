import * as cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar,{},[className])}>

            <div className={cls.links}>
                <div className={cls.link}>
                    <AppLink 
                        theme={AppLinkTheme.PRIMARY}
                        to={'/'}>
                        Войти
                    </AppLink>
                </div>
                <div className={cls.link}>
                    <AppLink 
                        theme={AppLinkTheme.PRIMARY}
                        to={'/favorites'}>
                        Избранное
                    </AppLink>
                </div>
                <div className={cls.link}>
                    <AppLink 
                        theme={AppLinkTheme.PRIMARY}
                        to={'/cart'}>
                        Корзина
                    </AppLink>
                </div>
            </div>
        </div>
    );
};