
import { Helmet } from 'react-helmet';
import { useFirestoreCollection } from '../../../App';
import { List } from '../../../components/List';
import { Main } from '../../../components/Main';
import { IDocument, Table } from '../../../components/Table';
import './index.scss';

export const PipeProduct = () => {
    const pipeCollection = useFirestoreCollection<IDocument>("pipe");

    return (
        <main>
            <Helmet>
                <title>Купить круглую трубу в Молодечно. Широкий ассортимент размеров.</title>
                <meta name="description" content="Труба ду 15, 20, 25, 32 и больше. Широкий выбор круглых труб в Складе металла в Молодечно. Разные размеры и диаметры. Качественное металлическое изделие для различных строительных проектов." />
            </Helmet>

            <Main 
                title='Круглая труба: широкий ассортимент диаметров и толщин стенок' 
                bg='zadnij-fon-sklad-metalla-zavod-po-proizvodstvu-vodogazoprovodnoj-i-elektrosvarnoj-truby.jpg' 
                optionalClass="half" 
            />

            <Table 
                title='Каталог круглой трубы: размеры и характеристики.'
                collections={
                    [
                        {
                            imgAlt: 'Фото на котором Труба водогазопроводная и электросварная',
                            imgTitle: 'Труба водогазопроводная и электросварная',
                            title: 'Труба водогазопроводная и электросварная',
                            icon: 'vodogazoprovodnaya-i-elektrosvarnaya-truba-v-sklade-metalla.jpg',
                            documents: pipeCollection.data,
                        },
                    ]
                }
            />

            <List 
                title="Подробнее о наших круглых трубах:"
                listItem={[
                    {
                        imgAlt: 'Картинка трубы водогазопроводной и электросварной',
                        imgTitle: 'Водогазопроводные трубы изготавливаются из углеродистой',
                        listImg: 'foto-metallicheskoj-truby-krugloj.jpg',
                        listText: 'Водогазопроводные трубы изготавливаются из углеродистой и низколегированной стали и служат для транспортировки газа и жидкостей под давлением. Электросварные трубы также изготавливаются из углеродистой и низколегированной стали, но производятся путем сварки листового металла в трубу.',
                    },
                    {
                        imgAlt: 'Фото трубы водогазопроводной и электросварной',
                        imgTitle: 'Водогазопроводные трубы имеют больший диаметр и толщину стенки',
                        listImg: 'foto-metallicheskoj-truby-vodogazoprovodnoj.jpg',
                        listText: 'Водогазопроводные трубы имеют больший диаметр и толщину стенки, чем электросварные трубы. Обе разновидности труб могут быть использованы в конструкциях зданий и мостов.',
                    },
                    {
                        imgAlt: 'Изображение трубы водогазопроводной и электросварной',
                        imgTitle: 'Для водогазопроводных труб используются специальные',
                        listImg: 'foto-metallicheskoj-truby-elektrosvarnoj.jpg',
                        listText: 'Для водогазопроводных труб используются специальные соединительные элементы для обеспечения герметичности соединений. Электросварные трубы обладают высокой прочностью и долговечностью, что делает их популярным выбором для транспортировки газа и жидкостей в условиях высокой нагрузки и давления.',
                    },
                    {
                        imgAlt: 'Фотография трубы водогазопроводной и электросварной',
                        imgTitle: 'Водогазопроводные и электросварные трубы могут быть подвергнуты',
                        listImg: 'foto-raznyh-vidov-metalla.jpg',
                        listText: 'Водогазопроводные и электросварные трубы могут быть подвергнуты различным видам обработки поверхности, таким как горячее оцинкование, чтобы обеспечить защиту от коррозии и увеличить их срок службы. Кроме того, электросварные трубы могут быть изготовлены из нержавеющей стали или других сплавов для обеспечения определенных свойств, таких как устойчивость к высоким температурам и химической коррозии.',
                    },
                ]}
            />
        </main>
    )
}