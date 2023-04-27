
import { useFirestoreCollection } from '../../../App';
import Grid from '../../../components/Grid';
import { Main } from '../../../components/Main';
import { IDocument, Table } from '../../../components/Table';
import './index.scss';

import FoundationIcon from '@mui/icons-material/Foundation';
import CategoryIcon from '@mui/icons-material/Category';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HardwareIcon from '@mui/icons-material/Hardware';
import GavelIcon from '@mui/icons-material/Gavel';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BrushIcon from '@mui/icons-material/Brush';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Helmet } from 'react-helmet';

export const ProfileProduct = () => {
    const profileCollection = useFirestoreCollection<IDocument>("profile");
    
    return (
        <main>
            <Helmet>
                <title>Профильные трубы высокого качества в Складе металла, Молодечно</title>
                <meta name="description" content="Профиль 20х20, 40х20, 40х40, 60х40 и другие размеры. Широкий выбор профильных труб разных размеров и материалов в Складе металла в Молодечно. Качественные изделия по доступным ценам." />
            </Helmet>

            <Main 
                title='Профильные трубы: широкий выбор по доступным ценам' 
                bg="zadnij-fon-sklad-metalla-cekh-profilnoj-truby.jpg"
                optionalClass="half" 
            />

            <Table 
                title='Каталог профильной трубы: широкий выбор изделий для различных целей'
                collections={
                    [
                        {
                            imgAlt: 'Фото на котором Профильная труба',
                            imgTitle: 'Профильная труба',
                            title: 'Профильная труба',
                            icon: "profil'naya-truba-v-sklade-metalla.jpg",
                            documents: profileCollection.data,
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
                            icon: <HomeWorkIcon />,
                            title: 'Профильные трубы используются',
                            link: '',
                            text: 'в различных отраслях промышленности, таких как строительство, автомобильная промышленность, производство мебели и т.д.',
                        },
                        {
                            icon: <CategoryIcon />,
                            title: 'Они имеют различные',
                            link: '',
                            text: 'формы, такие как квадратные, прямоугольные, круглые и овальные, и могут быть изготовлены из различных материалов, таких как сталь, алюминий, медь и т.д.',
                        },
                        {
                            icon: <FoundationIcon />,
                            title: 'Профильные трубы широко',
                            link: '',
                            text: 'используются в строительстве зданий и сооружений для создания каркасов, рам, ограждений и других конструкций.',
                        },
                        {
                            icon: <HardwareIcon />,
                            title: 'Их удобно обрабатывать',
                            link: '',
                            text: 'и монтировать, что делает процесс строительства более эффективным и быстрым.',
                        },
                        {
                            icon: <GavelIcon />,
                            title: 'Профильные трубы имеют',
                            link: '',
                            text: 'высокую прочность и устойчивость к коррозии, что делает их долговечными и надежными.',
                        },
                        {
                            icon: <DesignServicesIcon />,
                            title: 'Они также могут использоваться',
                            link: '',
                            text: 'в качестве элементов дизайна, добавляя эстетическую привлекательность к различным конструкциям и изделиям.',
                        },
                        {
                            icon: <BrushIcon />,
                            title: 'Профильные трубы могут',
                            link: '',
                            text: 'быть подвергнуты различным видам обработки и покрытий, таких как горячее оцинкование, окрашивание и т.д.',
                        },
                        {
                            icon: <DomainVerificationIcon />,
                            title: 'Профильные трубы являются',
                            link: '',
                            text: 'экологически чистыми, так как их можно перерабатывать и использовать повторно.',
                        },
                        {
                            icon: <BeachAccessIcon />,
                            title: 'Они также могут быть',
                            link: '',
                            text: 'использованы для создания инженерных систем, таких как вентиляционные системы, трубопроводы для транспортировки жидкостей и газов и т.д.',
                        },
                    ]
                } 
            />
        </main>
    )
}