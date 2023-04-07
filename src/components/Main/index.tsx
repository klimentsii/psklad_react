
import { Link } from 'react-router-dom';
import './index.scss';


interface IMain {
    title: string;
    bg: string;
    optionalClass: string;
}

export const Main = ({title, bg, optionalClass}: IMain) => {
    return (
        <section className={'main ' + optionalClass} style={{backgroundImage: `url(../../assets/images/bg/${bg})`}} >
          <div className="container">
              <div className="main_inner">
                    <h1>{title}</h1>

                    <button className='page_button hover_3'><Link to='/catalog'>Цены</Link></button>

                    <div className="main_phones px40">
                        <Link className='main_phone hover_3' to="tel:+375296561046">A1 +375-29-656-10-46</Link>
                        <Link className='main_phone hover_3' to="tel:+375295561045">МТС +375-29-556-10-45</Link>
                    </div>
              </div>
          </div>
        </section>
    )
}