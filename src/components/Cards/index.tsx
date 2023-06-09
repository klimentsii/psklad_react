import { Link } from "react-router-dom"
import './index.scss';

interface ICards {
    title: string;
    cards: ICard[];
}

interface ICard {
    title: string;
    text: string;
    imgSrc: string;
    imgAlt: string;
    imgTitle: string;
    link: string;
}

export const Cards = ({ cards, title }: ICards) => {

    const styles = {
        marginTop: '20px',
    }

    return(
        <section className="cards">

        <div className="container" style={styles}>
            <h2 className="page_title">
                {title}
            </h2>

            <div className="page_underline"></div>
        </div>

            {cards.map((e, i) => 
                <div className="card" key={i}>
                    <div className="container">
                        <div className="card_inner">

                            <Link to={e.link} className="card_title hover_3">
                                <h3>
                                    {e.title}
                                </h3>
                            </Link>
                            <p className="card_text" dangerouslySetInnerHTML={{__html: e.text}}></p>
                            <img className="card_img" src={'../../assets/images/services/' + e.imgSrc} alt={e.imgAlt} title={e.imgTitle} />
                            <button className="page_button hover_3">
                                <Link to={e.link}>Перейти</Link>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}