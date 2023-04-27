import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar';
import './index.scss';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header_inner">
                    <Link to='/' className="header_item_logo hover_3">
                        <img src="../../assets/images/logos/metallicheskij-logotip-sklad-metalla.png" alt="логотип склада металла" title='металлический логотип' />
                        <div className="header_logo_title">Склад Металла</div>
                    </Link>

                    <Navbar></Navbar>    
                </div>
            </div>
        </header>
    )
}