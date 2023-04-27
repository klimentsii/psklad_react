
import { useFirestoreCollection } from '../../../App';
import Grid from '../../../components/Grid';
import { Main } from '../../../components/Main';
import { IDocument, Table } from '../../../components/Table';
import './index.scss';

import BlindsClosedIcon from '@mui/icons-material/BlindsClosed';
import BlurOffIcon from '@mui/icons-material/BlurOff';
import CameraIcon from '@mui/icons-material/Camera';
import CopyrightIcon from '@mui/icons-material/Copyright';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import CropFreeIcon from '@mui/icons-material/CropFree';
import { Helmet } from 'react-helmet';

export const FittingProduct = () => {
    const fittingCollection = useFirestoreCollection<IDocument>("fitting");

    return (
        <main>
            <Helmet>
                <title>Арматура высокого качества в Складе металла в Молодечно</title>
                <meta name="description" content="Арматура 6мм, 8мм, 10мм, 12мм и больше. Широкий выбор арматуры различных диаметров и марок в Складе металла в Молодечно. Качественные материалы для строительства и ремонта." />
            </Helmet>

            <Main 
                title='приобрести арматуру для строительства в нашем каталоге - широкий выбор металлических изделий!' 
                bg='zadnij-fon-sklad-metalla-hranilishche-metalloizdelij-i-v-chastnosti-armatury.jpg' 
                optionalClass="half" 
            />

            <Table 
                title='Арматура: основные свойства и области применения'
                collections={
                    [
                        {
                            imgAlt: 'Фото на котором Арматура',
                            imgTitle: 'Арматура',
                            title: 'Арматура',
                            icon: 'armatura-v-sklade-metalla.jpg',
                            documents: fittingCollection.data,
                        },
                    ]
                }
            />

            <Grid 
                title="Профильные трубы в нашем предприятии: широкий ассортимент высококачественной продукции" 
                secondClass=''
                gridItems={
                    [
                        {
                            icon: <BlindsClosedIcon />,
                            title: 'Арматура - это один из',
                            link: '',
                            text: 'самых распространенных строительных материалов, используемых для армирования железобетонных конструкций.',
                        },
                        {
                            icon: <BlurOffIcon />,
                            title: 'Арматура обладает высокой',
                            link: '',
                            text: 'прочностью и устойчивостью к коррозии, что позволяет использовать ее в различных условиях эксплуатации.',
                        },
                        {
                            icon: <CameraIcon />,
                            title: 'Арматурная сталь производится из',
                            link: '',
                            text: 'легированной стали, содержащей элементы, такие как углерод, марганец, кремний, сера и фосфор.',
                        },
                        {
                            icon: <CopyrightIcon />,
                            title: 'Стандартные размеры арматуры',
                            link: '',
                            text: 'включают диаметры от 6 до 50 мм, при этом наиболее популярными являются диаметры от 8 до 32 мм.',
                        },
                        {
                            icon: <ControlCameraIcon />,
                            title: 'Арматура имеет различные',
                            link: '',
                            text: 'классы прочности, которые определяются по значению предела текучести и предела прочности. Наиболее распространенными классами являются А240 и А400.',
                        },
                        {
                            icon: <CorporateFareIcon />,
                            title: 'Арматуру можно использовать',
                            link: '',
                            text: 'не только для армирования железобетонных конструкций, но и для создания различных металлических конструкций, например, для изготовления решеток, заборов и т.д.',
                        },
                        {
                            icon: <CropFreeIcon />,
                            title: 'Арматура может быть',
                            link: '',
                            text: 'изогнута в различных формах и размерах в соответствии с требованиями проекта.',
                        },
                    ]
                } 
            />
        </main>
    )
}