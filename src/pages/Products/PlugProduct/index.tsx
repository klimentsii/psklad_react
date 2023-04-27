
import { Helmet } from 'react-helmet';
import { useFirestoreCollection } from '../../../App';
import { List } from '../../../components/List';
import { Main } from '../../../components/Main';
import { IDocument, Table } from '../../../components/Table';
import './index.scss';

export const PlugProduct = () => {
    const plugCollection = useFirestoreCollection<IDocument>("plug");

    return (
        <main>
            <Helmet>
                <title>Заглушки для профильных труб в Складе металла в Молодечно: качество, разнообразие, надежность.</title>
                <meta name="description" content="Заглушки 25х25, 40х20, 40х40 и больше. Широкий ассортимент заглушек для профильных труб в Складе металла в Молодечно. Качественные и надежные решения для завершения вашего проекта." />
            </Helmet>   

            <Main 
                title='Заглушки для труб: защита от пыли и грязи' 
                bg="zadnij-fon-sklad-metalla-zavod-po-proizvodstvu-zaglushek-dlya-profilnyh-trub.jpg"
                optionalClass="half" 
            />

            <Table 
                title='Каталог заглушек: размеры, функции и характеристики.'
                collections={
                    [
                        {
                            imgAlt: 'Фото на котором Заглушки',
                            imgTitle: 'Заглушки',
                            title: 'Заглушки',
                            icon: 'zaglushki-dlya-trub-v-sklade-metalla.jpg',
                            documents: plugCollection.data,
                        },
                    ]
                }
            />

            <List 
                title="Подробнее о заглушках:"
                listItem={[
                    {
                        imgAlt: 'Фотография заглушек для труб',
                        imgTitle: 'Заглушки для труб - небольшие элементы, которые закрывают концы труб',
                        listImg: 'foto-zaglushek-dlya-truby.jpg',
                        listText: 'Заглушки для труб - небольшие элементы, которые закрывают концы труб, чтобы предотвратить проникновение в них грязи, воды, пыли и других внешних элементов. Они могут использоваться как для временной, так и для постоянной защиты концов труб. Заглушки выпускаются в разных размерах и формах, чтобы соответствовать различным типам труб и приложений. Они могут быть изготовлены из различных материалов, таких как пластик, металл, резина и другие.',
                    },
                ]}
            />
        </main>
    )
}