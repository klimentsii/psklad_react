

import Grid from '../../components/Grid';
import { Main } from '../../components/Main';
import './index.scss';

import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import TtyIcon from '@mui/icons-material/Tty';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MapComponent } from '../../components/MapComponent';
import { Gallery } from '../../components/Gallery';

export const Contacts = () => {
    return (
        <main>
            <Main title='Свяжитесь с нами по предпочитаемым средствам связи' bg='contacts.jpg' optionalClass="half" />
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
                    ]
                } 
            />
            <Gallery
                images={[
                    {
                        imgSrc: 'sklad.jpg',
                        imgAlt: '',
                    },
                    {
                        imgSrc: 'sklad2.jpg',
                        imgAlt: '',
                    },
                    {
                        imgSrc: 'sklad3.jpg',
                        imgAlt: '',
                    },
                    {
                        imgSrc: 'sklad4.jpg',
                        imgAlt: '',
                    },
                ]}
            />
            <MapComponent />
        </main>
    )
}