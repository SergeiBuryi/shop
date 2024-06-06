import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {FavoritesPage} from "pages/FavoritesPage";
import {CartPage} from "pages/CartPage";

export enum AppRoutes {
    MAIN = 'main',
    FAVORITES = 'favorites',
    CART = 'cart',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FAVORITES]: '/favorites',
    [AppRoutes.CART]: '/cart',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />
    },
    [AppRoutes.FAVORITES]: {
        path: RoutePath[AppRoutes.FAVORITES],
        element: <FavoritesPage />
    },
    [AppRoutes.CART]: {
        path: RoutePath[AppRoutes.CART],
        element: <CartPage />
    },
};