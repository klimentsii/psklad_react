
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
        link: '/ceny/',
    },
    {
        name: 'Услуги',
        link: '/uslugi/',
    },
    {
        name: 'Профильная труба',
        link: "/profil'/",
    },
    {
        name: 'Арматура',
        link: '/armatura/',
    },
    {
        name: 'Сетка кладочная',
        link: '/setka/',
    },
    {
        name: 'Лист металлический',
        link: '/list/',
    },
    {
        name: 'Трубы водогазопроводная и электросварная',
        link: '/truby/',
    },
    {
        name: 'Металлический квадрат',
        link: '/kvadrat/',
    },
    {
        name: 'Металлический круг',
        link: '/krug/',
    },
    {
        name: 'Металлический уголок',
        link: '/ugolok/',
    },
    {
        name: 'Заглушки',
        link: '/zaglushki/',
    },
    {
        name: 'Полоса металлическая',
        link: '/polosa/',
    },
    {
        name: 'Контакты',
        link: '/contacty/',
    },
];
