import { ReactNode } from "react";
import { ProfileProduct } from "./pages/Products/ProfileProduct";

export interface IRoute {
    name: string;
    link: string;
}

export const routes: IRoute[] = [
    {
        name: 'Главная',
        link: '/',
    },
    {
        name: 'Цены',
        link: '/catalog',
    },
    {
        name: 'Услуги',
        link: '/services',
    },
    {
        name: 'Профильная труба',
        link: '/profile',
    },
    {
        name: 'Лист металлический',
        link: '/sheet',
    },
    {
        name: 'Трубы водогазопроводная и электросварная',
        link: '/pipe',
    },
    {
        name: 'Металлический квадрат',
        link: '/square',
    },
    {
        name: 'Металлический круг',
        link: '/circle',
    },
    {
        name: 'Металлический уголок',
        link: '/angular',
    },
    {
        name: 'Заглушки',
        link: '/plug',
    },
    {
        name: 'Полоса металлическая',
        link: '/strip',
    },
    {
        name: 'Контакты',
        link: '/contacts',
    },
];
