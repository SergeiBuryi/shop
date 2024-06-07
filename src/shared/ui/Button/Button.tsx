import { ButtonHTMLAttributes, FC } from 'react';
import * as cls from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

export enum ThemeButton {
    CLEAR = 'clear',
    GREEN = 'green',
    GRAY = 'gray',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    icon?: React.ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        icon,
        children,
        ...otherProps
    } = props;

    return ( 
        <button 
            className={classNames(cls.Button,{},[className, cls[theme]])}
            {...otherProps}
        >   
            {icon && <span className={cls.icon}>{icon}</span>}
            {children}
        </button>
    ) 
};