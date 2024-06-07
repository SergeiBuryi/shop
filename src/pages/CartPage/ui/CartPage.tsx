import { useTranslation } from "react-i18next";

const CartPage = () => {
    const {t} = useTranslation('cart');
    return (
        <div>
            {t('cart')}
        </div>
    );
};

export default CartPage;