
import { Helmet } from 'react-helmet';
import { useFirestoreCollection } from '../../../App';
import { List } from '../../../components/List';
import { Main } from '../../../components/Main';
import { IDocument, Table } from '../../../components/Table';
import './index.scss';

export const SquareProduct = () => {
    const squareCollection = useFirestoreCollection<IDocument>("square");

    return (
        <main>
            <Helmet>
                <title>Металлический квадрат в Складе металла в Молодечно - надежное решение.</title>
                <meta name="description" content="Квадрат 8х8мм, 10х10мм и другие. Выберите качественный металлический квадрат в Складе металла в Молодечно. Широкий ассортимент размеров и надежное качество материалов." />
            </Helmet>

            <Main 
                title='Металлический квадрат: широкий выбор размеров и толщин в нашем каталоге' 
                bg='zadnij-fon-sklad-metalla-cekh-kvadrata-metallicheskogo.jpg' 
                optionalClass="half" 
            />

            <Table 
                title='Каталог квадрата металлического: размеры и характеристики.'
                collections={
                    [
                        {
                            imgAlt: 'Фото на котором Квадрат металлически',
                            imgTitle: 'Квадрат металлически',
                            title: 'Квадрат металлический',
                            icon: 'kvadrat-metallicheskij-v-sklade-metalla.jpg',
                            documents: squareCollection.data,
                        },
                    ]
                }
            />

            <List 
                title="Подробнее о металлическом квадрате:"
                listItem={[
                    {
                        imgAlt: 'Фотография металлического квадрата',
                        imgTitle: 'Металлический квадрат - это металлический профиль, имеющий сечение',
                        listImg: 'foto-metallicheskogo-kvadrata.jpg',
                        listText: 'Металлический квадрат - это металлический профиль, имеющий сечение квадрата. Он широко используется в строительстве для изготовления различных конструкций, таких как рамы, ограждения, лестницы, балконы и т.д. Квадратный профиль имеет ряд преимуществ, таких как высокая прочность и устойчивость к деформациям, легкость и удобство в монтаже. Он может быть изготовлен из различных металлических материалов, включая сталь, алюминий и нержавеющую сталь.',
                    },
                    {
                        imgAlt: 'Фото металлического квадрата',
                        imgTitle: 'Металлический квадрат доступен в различных размерах и толщинах',
                        listImg: 'foto-metallicheskogo-kvadrata-v-assortimente.jpg',
                        listText: 'Металлический квадрат доступен в различных размерах и толщинах, что позволяет выбрать подходящий профиль для конкретных задач. Он может быть также обработан различными способами, такими как покраска, гальваническое покрытие, шлифовка, чтобы соответствовать требованиям дизайна и функциональности.',
                    },
                ]}
            />
        </main>
    )
}