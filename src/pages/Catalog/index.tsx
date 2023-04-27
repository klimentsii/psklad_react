import { useFirestoreCollection } from "../../App";
import { Main } from "../../components/Main";
import { Paragraph } from "../../components/Paragraph";
import { IDocument, Table } from "../../components/Table";
import { Helmet } from 'react-helmet';

export const Catalog =() => {
    const profileCollection = useFirestoreCollection<IDocument>("profile");
    const sheetCollection = useFirestoreCollection<IDocument>("sheet");
    const pipeCollection = useFirestoreCollection<IDocument>("pipe");
    const squareCollection = useFirestoreCollection<IDocument>("square");
    const angularCollection = useFirestoreCollection<IDocument>("angular");
    const circleCollection = useFirestoreCollection<IDocument>("circle");
    const fittingCollection = useFirestoreCollection<IDocument>("fitting");
    const plugCollection = useFirestoreCollection<IDocument>("plug");
    const stripCollection = useFirestoreCollection<IDocument>("strip");
    const gridCollection = useFirestoreCollection<IDocument>("grid");
      
    return (
        <main>
            <Helmet>
                <title>Цены и каталог металлопродукции в Молодечно: выгодные предложения для ваших проектов</title>
                <meta name="description" content="Изучите наши цены и обширный каталог металлопродукции в Складе металла в Молодечно. Найдите идеальное решение для ваших строительных и промышленных проектов." />
            </Helmet>

            <Main title='Надежный партнер в сфере металлоторговли - Склад Металла в Молодечно' bg='zadnij-fon-sklad-metalla-cekh-s-metalloprokatom.jpg' optionalClass=''></Main>
            
            <Table 
                title='Вы можете приобрести металлопрокат в нашем каталоге - широкий выбор металлических изделий!'
                collections={
                    [
                        {
                            imgAlt: 'Фото на котором Профильная труба',
                            imgTitle: 'Профильная труба',
                            title: 'Профильная труба',
                            icon: "profil'naya-truba-v-sklade-metalla.jpg",
                            documents: profileCollection.data,
                        },
                        {
                            imgAlt: 'Фото на котором Труба водогазопроводная и электросварная',
                            imgTitle: 'Труба водогазопроводная и электросварная',
                            title: 'Труба водогазопроводная и электросварная',
                            icon: 'vodogazoprovodnaya-i-elektrosvarnaya-truba-v-sklade-metalla.jpg',
                            documents: pipeCollection.data,
                        },
                        {
                            imgAlt: 'Фото на котором Арматура',
                            imgTitle: 'Арматура',
                            title: 'Арматура',
                            icon: 'armatura-v-sklade-metalla.jpg',
                            documents: fittingCollection.data,
                        },
                        {
                            imgAlt: 'Фото на котором Лист Металлический',
                            imgTitle: 'Лист Металлический',
                            title: 'Лист Металлический',
                            icon: 'list-metallicheskij-v-sklade-metalla.jpg',
                            documents: sheetCollection.data,
                        },
                        {
                            imgAlt: 'Фото на котором Заглушки',
                            imgTitle: 'Заглушки',
                            title: 'Заглушки',
                            icon: 'zaglushki-dlya-trub-v-sklade-metalla.jpg',
                            documents: plugCollection.data,
                        },
                        {
                            imgAlt: 'Фото на котором Квадрат металлический',
                            imgTitle: 'Квадрат металлический',
                            title: 'Квадрат металлический',
                            icon: 'kvadrat-metallicheskij-v-sklade-metalla.jpg',
                            documents: squareCollection.data,
                        },
                        {
                            imgAlt: 'Фото на котором Круг металлический',
                            imgTitle: 'Круг металлический',
                            title: 'Круг металлический',
                            icon: 'krug-metallicheskij-v-sklade-metalla.jpg',
                            documents: circleCollection.data,
                        },
                        {
                            imgAlt: 'Фото на котором Уголок металлический',
                            imgTitle: 'Уголок металлический',
                            title: 'Уголок металлический',
                            icon: 'ugolok-metallicheskij-v-sklade-metalla.jpg',
                            documents: angularCollection.data,
                        },
                        {
                            imgAlt: 'Фото на котором Полоса Металлическая',
                            imgTitle: 'Полоса Металлическая',
                            title: 'Полоса Металлическая',
                            icon: 'polosa-metallicheskaya-v-sklade-metalla.jpg',
                            documents: stripCollection.data,
                        },
                        {
                            imgAlt: 'Фото на котором Сетка кладочная',
                            imgTitle: 'Сетка кладочная',
                            title: 'Сетка кладочная',
                            icon: 'setka-metallicheskaya-kladochnaya-v-sklade-metalla.jpg',
                            documents: gridCollection.data,
                        },
                    ]
                }
            />

            <Paragraph
                title="Приобрести металлопродукцию на частном предприятии с доставкой по Беларуси: Склад Металла в Молодечно и широкий ассортимент товаров"
                text="Наше частное предприятие предлагает приобрести качественную металлопродукцию на нашем складе в Молодечно и с доставкой по всей Беларуси. У нас вы найдете <strong>широкий ассортимент металлических изделий и материалов</strong>: от листового металла до профильных труб разных размеров и форм. Наши профессиональные консультанты помогут вам с выбором нужных изделий и подберут наилучшие условия сотрудничества. Мы <strong>гарантируем качество продукции и быструю обработку заказов</strong>. Обращайтесь к нам и получите качественную металлопродукцию по выгодной цене!"
            />
        </main>
    )
}