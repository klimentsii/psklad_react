import './index.scss'

interface ITable {
    title: string;
    collections: ICollection[];
}

interface ICollection {
    icon: string;
    title: string;
    imgAlt: string;
    imgTitle: string;
    documents: IDocument[];
}

export interface IDocument {
    name: string;
    price: string;
}

export const Table = ({ collections, title } :ITable) => {


    return(
        <section className="table" id="catalog">
            <div className="container">
                <h2 className="page_title">
                    {title}
                </h2>
                <div className="page_underline"></div>
            </div>
            <div className="container">
                <div className="table_inner">
                    {
                        collections.map((item, index) => 
                            <div className="table_item" key={index}>
                                <div className="table_header">
                                    <img src={'../../assets/images/catalog/' + item.icon} alt={item.imgAlt} title={item.imgTitle} className="table_img" />
                                    <h3 className="table_title">{item.title}</h3>
                                </div>
                                {/* <p className='table_document'>Цены в скобках указаны за 1м экземпляра</p>
                                <br /> */}
                                <ul className='table_list'>
                                {item.documents.map((itemDoc, indexDoc) => 
                                    <li className='table_document' key={indexDoc}>{itemDoc.name + ' (' + itemDoc.price + 'р.)'}</li>
                                )}
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}