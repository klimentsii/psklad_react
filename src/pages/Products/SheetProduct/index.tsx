
import { useFirestoreCollection } from '../../../App';
import Grid from '../../../components/Grid';
import { Main } from '../../../components/Main';
import { IDocument, Table } from '../../../components/Table';
import './index.scss';

import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import HardwareIcon from '@mui/icons-material/Hardware';
import GavelIcon from '@mui/icons-material/Gavel';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BrushIcon from '@mui/icons-material/Brush';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Helmet } from 'react-helmet';

export const SheetProduct = () => {
    const sheetCollection = useFirestoreCollection<IDocument>("sheet");
    
    return (
        <main>
            <Helmet>
                <title>Легкий металл в Молодечно: широкий выбор в Складе металла</title>
                <meta name="description" content="Лист 1х1.25, 1.5х1.25 и другие. Выбирайте качественный лист металла в Складе металла в Молодечно. Разнообразие размеров и толщин. Надежное и прочное решение для различных проектов." />
            </Helmet>

            <Main 
                title='приобрести лист металлический в нашем каталоге - широкий выбор металлопроката' 
                bg='zadnij-fon-sklad-metalla-cekh-lista-metallicheskogo.jpg' 
                optionalClass="half" 
            />

            <Table 
                title='Каталог листа металлического: размеры и характеристики.'
                collections={
                    [
                        {
                            imgAlt: 'Фото на котором Лист металлический',
                            imgTitle: 'Лист металлический',
                            title: 'Лист металлический',
                            icon: 'list-metallicheskij-v-sklade-metalla.jpg',
                            documents: sheetCollection.data,
                        },
                    ]
                }
            />

            <Grid 
                title="Факты о металлическом листе" 
                secondClass=''
                gridItems={
                    [
                        {
                            icon: <AddBusinessIcon />,
                            title: 'Лист металла является',
                            link: '',
                            text: 'одним из самых распространенных материалов в промышленности и строительстве.',
                        },
                        {
                            icon: <HardwareIcon />,
                            title: 'Лист металла может',
                            link: '',
                            text: 'быть сделан из различных материалов, включая сталь, алюминий, медь и другие металлы.',
                        },
                        {
                            icon: <GavelIcon />,
                            title: 'Лист металла может иметь',
                            link: '',
                            text: 'различную толщину, ширину и длину, что делает его универсальным материалом для многих приложений.',
                        },
                        {
                            icon: <DesignServicesIcon />,
                            title: 'Лист металла может быть',
                            link: '',
                            text: 'использован для изготовления различных конструкций, включая крыши, фасады зданий, кузова автомобилей, железнодорожные вагоны и многие другие изделия.',
                        },
                        {
                            icon: <BrushIcon />,
                            title: 'Лист металла может быть',
                            link: '',
                            text: 'обработан различными способами, такими как резка, гибка, сварка и другие, что позволяет создавать сложные детали и конструкции.',
                        },
                        {
                            icon: <DomainVerificationIcon />,
                            title: 'Лист металла может быть',
                            link: '',
                            text: 'окрашен, покрыт специальными покрытиями или обработан специальными методами для защиты от коррозии и повышения прочности.',
                        },
                        {
                            icon: <BeachAccessIcon />,
                            title: 'Лист металла может быть',
                            link: '',
                            text: 'переработан и использован повторно, что делает его экологически дружественным материалом.',
                        },
                    ]
                } 
            />
        </main>
    )
}