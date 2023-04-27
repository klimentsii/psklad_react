

import Grid from '../../components/Grid';
import { Main } from '../../components/Main';
import './index.scss';

import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import TtyIcon from '@mui/icons-material/Tty';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { MapComponent } from '../../components/MapComponent';
import { Gallery } from '../../components/Gallery';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCardIcon from '@mui/icons-material/AddCard';
import { Helmet } from 'react-helmet';

export const Contacts = () => {
    return (
        <main>
            <Helmet>
                <title>Контакты Склада металла в Молодечно - свяжитесь с нами для вопросов и заказов.</title>
                <meta name="description" content="Свяжитесь с нами для получения дополнительной информации и заказа металлической продукции в Складе металла в Молодечно." />
            </Helmet>

            <Main 
                title='Свяжитесь с нами по предпочитаемым средствам связи' 
                bg='zadnij-fon-sklad-metalla-chastnoe-predpriyatie-proizvodstvo-na-predpriyatii.jpg' 
                optionalClass="half" 
            />

            <Grid 
                title="Всегда на связи" 
                secondClass='contacts'
                gridItems={
                    [
                        {
                            icon: <LocalPhoneIcon />,
                            title: 'Мобильный телефон А1',
                            link: 'tel:+375296561046',
                            text: '+375-29-656-10-46',
                        },
                        {
                            icon: <LocalPhoneIcon />,
                            title: 'Мобильный телефон МТС',
                            link: 'tel:+375295561045',
                            text: '+375-29-556-10-45',
                        },
                        {
                            icon: <TtyIcon />,
                            title: 'Рабочий телефон',
                            link: 'tel:+375176521472',
                            text: '+375-17-652-14-72',
                        },
                        {
                            icon: <TelegramIcon />,
                            title: 'Телеграм',
                            link: 'https://t.me/joinchat/+375295561045',
                            text: '+375-29-556-10-45',
                        },
                        {
                            icon: <MailIcon />,
                            title: 'Почта',
                            link: 'mailto:molo.metall@gmail.com',
                            text: 'molo.metall@gmail.com',
                        },
                        {
                            icon: <LocationOnIcon />,
                            title: 'На карте',
                            link: "https://www.google.fr/maps/place/54%C2%B017'59.7%22N+26%C2%B052'46.6%22E/@54.2999178,26.8788223,323m/data=!3m2!1e3!4b1!4m12!1m7!3m6!1s0x46eecfd717f35999:0x5cf8d54261869925!2sMuseum+of+the+barricades+of+1991!8m2!3d56.9486149!4d24.1059482!16s%2Fg%2F1tdb_b7x!3m3!8m2!3d54.2999167!4d26.8796111",
                            text: 'ул. Т.Дудко 4В, Молодечно',
                        },
                        {
                            icon: <AccessTimeIcon />,
                            title: 'Время работы',
                            link: "https://www.google.fr/maps/place/54%C2%B017'59.7%22N+26%C2%B052'46.6%22E/@54.2999178,26.8788223,323m/data=!3m2!1e3!4b1!4m12!1m7!3m6!1s0x46eecfd717f35999:0x5cf8d54261869925!2sMuseum+of+the+barricades+of+1991!8m2!3d56.9486149!4d24.1059482!16s%2Fg%2F1tdb_b7x!3m3!8m2!3d54.2999167!4d26.8796111",
                            text: 'пн-пт, 8:00-17:00',
                        },
                    ]
                } 
            />
            <Gallery
                images={[
                    {
                        imgSrc: "foto-sklada-metalla-s-profil'nymi-trubami.jpg",
                        imgAlt: 'Мзображение на котором Профильные трубы в Молодечно',
                        imgTitle: 'Профильные трубы',
                    },
                    {
                        imgSrc: 'foto-sklada-metalla-s-metalloizdeliyami.jpg',
                        imgAlt: 'Фото на котором Профильные трубы в Складе Металла',
                        imgTitle: 'Профильные трубы',
                    },
                    {
                        imgSrc: 'foto-sklada-metalla-s-metalloprokatom.jpg',
                        imgAlt: 'Фото на котором Профильные трубы в Частном Предприятии',
                        imgTitle: 'Профильные трубы',
                    },
                    {
                        imgSrc: 'foto-sklada-metalla-s-foto-snaruzhi.jpg',
                        imgAlt: 'Картинка на котором Профильные трубы в Беларуси',
                        imgTitle: 'Профильные трубы',
                    },
                ]}
            />

            <Grid 
                title="Реквизиты нашего предприятия" 
                secondClass=''
                gridItems={
                    [
                        {
                            icon: <AccountBalanceIcon />,
                            title: 'Частное предприятие "Склад Металла"',
                            link: '',
                            text: 'юр. адр.: г.Молодечно ул.Т.Дудко, 4в',
                        },
                        {
                            icon: <AddCardIcon />,
                            title: 'Счет: ',
                            link: '',
                            text: 'BY70-BPSB-3012-3163-1201-7933-0000, УНП: 692247428',
                        },
                        {
                            icon: <AccountBalanceWalletIcon />,
                            title: 'В Дополнительный офис №504',
                            link: '',
                            text: 'Молодечно Региональной дирекции №700 по г.Минску и Минской области ОАО "БПС-Сбербанк" 222310, г.Молодечно, ул.Партизанская, 6',
                        },
                    ]
                } 
            />

            <MapComponent />
        </main>
    )
}