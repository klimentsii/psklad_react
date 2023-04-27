
import { Helmet } from 'react-helmet';
import { useFirestoreCollection } from '../../../App';
import Grid from '../../../components/Grid';
import { Main } from '../../../components/Main';
import { IDocument, Table } from '../../../components/Table';
import './index.scss';

import CottageIcon from '@mui/icons-material/Cottage';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import ExpandIcon from '@mui/icons-material/Expand';

export const GridProduct = () => {
    const gridCollection = useFirestoreCollection<IDocument>("grid");
    
    return (
        <main>
            <Helmet>
                <title>Сетка кладочная в Складе металла в Молодечно - надежное качество</title>
                <meta name="description" content="Сетка 50х50, 100х100. Ищете качественную сетку кладочную в Молодечно? В Складе металла предлагаем разнообразные размеры сетки для вашего строительного проекта." />
            </Helmet>

            <Main 
                title='Сетка кладочная: надежный материал для строительства' 
                bg='zadnij-fon-sklad-metalla-zavod-po-proizvodstvu-setki-kladochnoj.jpg' 
                optionalClass="half" 
            />

            <Table 
                title='Каталог сетки кладочной: широкий выбор и высокое качество материалов'
                collections={
                    [
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

            <Grid 
                title="Интересные факты о сетке кладочной" 
                secondClass=''
                gridItems={
                    [
                        {
                            icon: <CottageIcon />,
                            title: 'Сетка кладочная является',
                            link: '',
                            text: 'неотъемлемой частью строительных работ, она используется для укрепления стен, фундаментов, потолков и других конструкций.',
                        },
                        {
                            icon: <DensitySmallIcon />,
                            title: 'Сетка кладочная изготавливается из',
                            link: '',
                            text: 'стальной проволоки, которая обычно имеет диаметр от 3 до 12 мм.',
                        },
                        {
                            icon: <EditRoadIcon />,
                            title: 'Существует несколько видов',
                            link: '',
                            text: 'сетки кладочной, которые отличаются габаритами ячеек и диаметром проволоки. Выбор сетки зависит от конкретного типа строительных работ.',
                        },
                        {
                            icon: <ExpandIcon />,
                            title: 'Сетка кладочная защищает',
                            link: '',
                            text: 'стены от растрескивания и обеспечивает дополнительную прочность конструкции.',
                        },
                    ]
                } 
            />
        </main>
    )
}