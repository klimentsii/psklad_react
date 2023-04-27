import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import TtyIcon from '@mui/icons-material/Tty';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './index.scss';

import { routes } from '../../routes';

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_inner">
                    <div className="footer_item">
                        <div className="footer_title">
                            СТРАНИЦЫ
                        </div>
                        <div className="footer_links">
                            {routes.map((e, i) => <Link to={e.link} className="footer_link hover_3" key={i}>{e.name}</Link>)}
                        </div>
                    </div>

                    <div className="footer_item">
                        <div className="footer_title">
                            КОНТАКТЫ
                        </div>
                        <div className="footer_social">
                            <Link className="footer_link hover_3" to="mailto:molo.metall@gmail.com"><MailIcon /><div>molo.metall@gmail.com</div></Link>
                            <Link className="footer_link hover_3" to="tel:+375296561046"><LocalPhoneIcon /><div>+375-29-656-10-46</div></Link>
                            <Link className="footer_link hover_3" to="tel:+375295561045"><LocalPhoneIcon /><div>+375-29-556-10-45</div></Link>
                            <Link className="footer_link hover_3" to="tel:+375176521472"><TtyIcon /><div>+375-17-652-14-72</div></Link>
                            <Link className="footer_link hover_3" to="https://t.me/joinchat/+375295561045"><TelegramIcon /><div>+375-29-656-10-46</div></Link>
                            <Link className="footer_link hover_3" to="https://www.google.fr/maps/place/54%C2%B017'59.7%22N+26%C2%B052'46.6%22E/@54.2999178,26.8788223,323m/data=!3m2!1e3!4b1!4m12!1m7!3m6!1s0x46eecfd717f35999:0x5cf8d54261869925!2sMuseum+of+the+barricades+of+1991!8m2!3d56.9486149!4d24.1059482!16s%2Fg%2F1tdb_b7x!3m3!8m2!3d54.2999167!4d26.8796111"><LocationOnIcon /><div>ул. Т.Дудко 4В, Молодечно</div></Link>
                            <Link className="footer_link hover_3" to="https://www.google.fr/maps/place/54%C2%B017'59.7%22N+26%C2%B052'46.6%22E/@54.2999178,26.8788223,323m/data=!3m2!1e3!4b1!4m12!1m7!3m6!1s0x46eecfd717f35999:0x5cf8d54261869925!2sMuseum+of+the+barricades+of+1991!8m2!3d56.9486149!4d24.1059482!16s%2Fg%2F1tdb_b7x!3m3!8m2!3d54.2999167!4d26.8796111"><AccessTimeIcon /><div>пн-пт, 8:00-17:00</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}