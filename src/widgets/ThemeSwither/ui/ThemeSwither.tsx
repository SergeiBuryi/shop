import * as cls from './ThemeSwither.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LoginUserIcon from 'shared/assets/icons/login_user.svg';
import CartIcon from 'shared/assets/icons/cart.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitherProps {
    className?: string;
}

export const ThemeSwither = ({className}: ThemeSwitherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button 
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwither,{},[className])} 
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <LoginUserIcon /> : <CartIcon />}
        </Button>
    );
};