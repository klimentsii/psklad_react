import './index.scss'

interface IParagraph {
    title: string;
    text: string;
}

export const Paragraph = ({title, text}: IParagraph) => {
    return(
        <section className="paragraph">
            <div className="container">
                <div className="paragraph_inner">
                    <h2 className="page_title">
                        {title}
                    </h2>
                    <div className="page_underline"></div>
                    <p dangerouslySetInnerHTML={{__html: text}}></p>
                </div>
            </div>
        </section>
    )
}