import './index.scss';

import React from 'react';
import { Link } from 'react-router-dom';

interface IGrid {
    title: string;
    gridItems: IGridItem[];
    secondClass: string;
}

interface IGridItem {
    icon: React.ReactNode;
    title: string;
    text: string;
    link: string;
}

const Grid: React.FC<IGrid> = ({title, secondClass, gridItems}: IGrid) => {

    return (
        <section className={"grid " + secondClass}>
            <div className="container">
                <div className="grid_inner">
                    <h2 className="page_title">
                        {title}
                    </h2>

                    <div className="page_underline"></div>

                    <div className="grid_content">

                        {gridItems.map((e, i) => 
                            <Link to={e.link} replace className="grid_item" key={i}>
                                {e.icon} 
                            
                                <div className="grid_item_content">
                                    <h3 className="grid_item_title">
                                        {e.title}
                                    </h3>
                                    <p className="grid_item_text" dangerouslySetInnerHTML={{__html: e.text}}></p>
                                </div>
                            </Link>
                        )}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Grid;