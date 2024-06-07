import { useTranslation } from "react-i18next";

const FavoritesPage = () => {
    const {t} = useTranslation('favorites');
    return (
        <div>
            {t('favorites')}
        </div>
    );
};

export default FavoritesPage;