import { FC } from "react";
import {Link, LinkProps} from "react-router-dom";
import * as cls from './AppLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends Omit<LinkProps, 'to'> {
    className?: string;
    theme?: AppLinkTheme;
    to?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { 
        to, 
        className, 
        children, 
        theme = AppLinkTheme.PRIMARY, 
        ...otherProps 
    } = props;

    return (
        <Link 
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};