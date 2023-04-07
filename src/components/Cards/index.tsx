import { Link } from "react-router-dom"
import './index.scss';

interface ICards {
    cards: ICard[];
}

interface ICard {
    title: string;
    text: string;
    imgSrc: string;
    imgAlt: string;
    link: string;
}

export const Cards = ({ cards }: ICards) => {

    return(
        <section className="cards">
            {cards.map((e, i) => 
                <div className="card" key={i}>
                    <div className="container">
                        <div className="card_inner">
                            <Link to={e.link} className="card_title hover_3">
                                <h3>
                                    {e.title}
                                </h3>
                            </Link>
                            <p className="card_text">
                                {e.text}
                            </p>
                            <img className="card_img" src={'../../assets/images/services/' + e.imgSrc} alt={e.imgAlt} />
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