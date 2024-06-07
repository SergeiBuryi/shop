import {RouteProps} from "react-router-dom";
import {HomePage} from "pages/HomePage";
import {FavoritesPage} from "pages/FavoritesPage";
import {CartPage} from "pages/CartPage";

export enum AppRoutes {
    HOME = 'home',
    FAVORITES = 'favorites',
    CART = 'cart',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.FAVORITES]: '/favorites',
    [AppRoutes.CART]: '/cart',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath[AppRoutes.HOME],
        element: <HomePage />
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