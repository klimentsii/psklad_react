

import './index.scss';

interface IGallery {
    images: IImg[];
}

interface IImg {
    imgSrc: string;
    imgAlt: string;
}

export const Gallery = ({ images }: IGallery) => {



    return(
        <section className="gallery">
            {images.map((e, i) => <img src={'../../assets/images/sklad/' + e.imgSrc} key={i} alt={e.imgAlt}></img>)}
        </section>
    )
}