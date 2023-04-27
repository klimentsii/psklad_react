
import { Helmet } from 'react-helmet';
import { useFirestoreCollection } from '../../../App';
import { List } from '../../../components/List';
import { Main } from '../../../components/Main';
import { IDocument, Table } from '../../../components/Table';
import './index.scss';

export const CircleProduct = () => {
    const circleCollection = useFirestoreCollection<IDocument>("circle");

    return (
        <main>
            <Helmet>
                <title>Лучший выбор металлического круга в Складе металла в Молодечно. Широкий ассортимент.</title>
                <meta name="description" content="Круг радиус 6мм, 10мм, 12мм и больше. Возможности металлического круга в Складе металла в Молодечно. Высокое качество, разнообразие размеров и надежность материала." />
            </Helmet>

            <Main 
                title='Металлический круг: разновидности, применение и особенности' 
                bg='zadnij-fon-sklad-metalla-hranilishche-metalloizdelij-i-v-chastnosti-metallicheskiogo-kruga.jpg' 
                optionalClass="half" 
            />

            <Table 
                title='Каталог квадрата металлического: размеры и характеристики.'
                collections={
                    [
                        {
                            imgAlt: 'Фото на котором Круг металлический',
                            imgTitle: 'Круг металлический',
                            title: 'Круг металлический',
                            icon: 'krug-metallicheskij-v-sklade-metalla.jpg',
                            documents: circleCollection.data,
                        },
                    ]
                }
            />

            <List 
                title="Подробнее о металлическом круге:"
                listItem={[
                    {
                        imgAlt: 'Картинка металлического круга',
                        imgTitle: 'Металлический круг – это металлический прокат, имеющий форму круга',
                        listImg: 'foto-metallicheskogo-kruga.jpg',
                        listText: 'Металлический круг – это металлический прокат, имеющий форму круга с поперечным сечением. Он изготавливается из различных металлических сплавов, таких как сталь, алюминий, медь и др. Металлические круги широко применяются в строительстве, машиностроении, производстве оборудования и других отраслях промышленности. Металлические круги бывают разных диаметров и толщин, что позволяет подобрать оптимальный вариант для решения конкретных задач. Также круги могут иметь различные поверхностные обработки, такие как полировка или защитное покрытие, что улучшает их свойства и продлевает срок службы.',
                    },
                    {
                        imgAlt: 'Картинка металлического круга',
                        imgTitle: 'Одним из преимуществ металлического круга является его прочность',
                        listImg: 'foto-metallicheskogo-kruga-assortiment.jpg',
                        listText: 'Одним из преимуществ металлического круга является его прочность и устойчивость к механическим повреждениям. Кроме того, круги легко обрабатываются и могут быть использованы для изготовления различных деталей и конструкций.',
                    },
                ]}
            />
        </main>
    )
}