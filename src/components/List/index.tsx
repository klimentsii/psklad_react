import './index.scss'

interface IList {
    title: string;
    listItem: {
        listImg: string;
        listText: string;
        imgAlt: string;
        imgTitle: string;
    } []
}

export const List = ({ title, listItem }: IList) => {

    return (
        <section className="list">
            <div className="container">
                <div className="list_inner">
                    <h2 className="page_title">
                        {title}
                    </h2>

                    <div className="page_underline"></div>

                    <div className="list_content">
                        {
                            listItem.map((e, i) => 
                            <div className="list_item" key={i}>
                                <img src={'../../assets/images/list/' + e.listImg} alt={e.imgAlt} title={e.imgTitle} />
                                <div className='list_item_number'>0{i + 1}</div>
                                <p className="list_text">{e.listText}</p>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}