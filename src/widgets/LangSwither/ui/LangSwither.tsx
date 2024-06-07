import { useTranslation } from 'react-i18next';
import * as cls from './LangSwither.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import { useState } from 'react';

interface LangSwitherProps {
    className?: string;
}

export const LangSwither = ({className}: LangSwitherProps) => {
    const { theme, toggleTheme } = useTheme();
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('by');

    async function changeLanguage() {
        i18n.changeLanguage(i18n.language === 'by' ? 'en' : 'by');
        if(language === 'en') {
            setLanguage('by');
        } else {
            setLanguage('en');
        }
    }

    return (
        <div className={classNames(cls.LangSwither,{},[className])} >
            <button onClick={changeLanguage}>{language}</button>
        </div>
    );
};