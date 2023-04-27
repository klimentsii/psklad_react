
import { Helmet } from 'react-helmet';
import { Cards } from '../../components/Cards';
import { Main } from '../../components/Main';
import './index.scss';

export const Services = () => {
    return (
        <main>
            <Helmet>
                <title>Услуги металлоснабжения и обработки в Складе металла в Молодечно</title>
                <meta name="description" content="Разнообразные услуги по металлообработке, раскройке и доставке в Складе металла в Молодечно. Качественное обслуживание и надежное партнерство." />
            </Helmet>

            <Main 
                title='Широкий выбор и доступность: услуги по продаже и доставке металлических изделий в нашем большом каталоге в Складе Металла' 
                bg='fotografiya-zadnego-fona-stranicy-uslug-v-chastnom-predpriyatii-sklad-metalla.jpg' 
                optionalClass='' 
            />
            
            <Cards 
                title='Услуги нашей компании: каталог, доставка и раскрой металла'
                cards={[
                    {
                        title: 'Профильная труба',
                        text: 'Профильная труба — это металлический изделие, имеющее прямоугольное или квадратное сечение. Она отличается <strong>высокой жесткостью, прочностью и устойчивостью</strong> к нагрузкам, поэтому часто применяется в качестве элементов каркасов зданий и сооружений, а также в машиностроении, производстве мебели и т.д. В нашем складе металла представлен большой выбор профильных труб различных размеров и толщин, которые соответствуют высоким стандартам качества и имеют конкурентоспособные цены.',
                        imgSrc: "profil'naya-truba-iz-sklada-metalla.jpg",
                        imgAlt: 'Изображение профильных труб',
                        imgTitle: 'Профильная труба — это металлический изделие',
                        link: "/profil'/",
                    },
                    {
                        title: 'Лист металлический',
                        text: 'Лист металлический - универсальный и незаменимый материал для производства различных изделий. Он <strong>применяется в машиностроении, строительстве, производстве бытовой техники</strong> и многих других отраслях промышленности. Лист металла можно легко обрабатывать и соединять, что делает его одним из самых популярных материалов в металлообработке.',
                        imgSrc: 'list-metallicheskij-iz-sklada-metalla.jpg',
                        imgAlt: 'Изображение металлического листа',
                        imgTitle: 'Лист металлический - универсальный и незаменимый материал',
                        link: '/list/',
                    },
                    {
                        title: 'Трубы водогазопроводная и электросварная',
                        text: 'Трубы водогазопроводная и электросварная - это важные строительные материалы, которые широко используются в промышленности и гражданском строительстве. Они <strong>используются для транспортировки воды, газа, нефти</strong>, а также для создания конструкций различных зданий и сооружений. Трубы электросварные изготавливаются способом сварки под давлением из стали, а водогазопроводные - из горячекатаной или холоднокатаной стали. Эти трубы отличаются высокой прочностью и долговечностью, что делает их идеальным выбором для использования в строительстве.',
                        imgSrc: 'kruglaya-truba-iz-sklada-metalla.jpg',
                        imgAlt: 'Изображение водогазопроводной и электросварной трубы',
                        imgTitle: 'Трубы водогазопроводная и электросварная - это важные строительные',
                        link: '/truba/',
                    },
                    {
                        title: 'Металлический квадрат',
                        text: 'Металлический квадрат - это стальной профиль, имеющий сечение квадратной формы. Он часто используется в строительстве и металлообработке для <strong>создания различных конструкций, таких как ограждения, перила, каркасы</strong> и др. Металлический квадрат производится из различных видов стали, таких как углеродистая, легированная и нержавеющая. Размеры металлического квадрата могут быть различными в зависимости от потребностей проекта.',
                        imgSrc: 'metallicheskij-kvadrat-iz-sklada-metalla.jpg',
                        imgAlt: 'Изображение металлического квадрата',
                        imgTitle: 'Металлический квадрат - это стальной профиль, имеющий сечение квадратной',
                        link: '/kvadrat/',
                    },
                    {
                        title: 'Металлический круг',
                        text: 'Металлический круг - это изделие, изготовленное из металла в форме круга. Он широко используется в промышленности для изготовления различных деталей и конструкций, а также в <strong>строительстве для создания опор, стоек</strong> и других элементов. Металлические круги могут быть изготовлены из различных <strong>металлических сплавов, включая сталь, алюминий, латунь</strong> и др. Они также могут иметь различные диаметры и толщину, что позволяет использовать их для различных целей.',
                        imgSrc: 'metallicheskij-krug-iz-sklada-metalla.jpg',
                        imgAlt: 'Фото металлического круга',
                        imgTitle: 'Металлический круг - это изделие, изготовленное из металла в форме круга',
                        link: '/krug/',
                    },
                    {
                        title: 'Металлический уголок',
                        text: 'Металлический уголок – это металлический профиль, который имеет форму угла. Он применяется в различных отраслях промышленности и строительства для создания различных конструкций и каркасов. Уголки могут быть изготовлены из стали, алюминия или других металлов, а также могут быть покрыты специальными защитными покрытиями для предотвращения коррозии. Металлический уголок часто используется для <strong>создания каркасов строительных конструкций, установки дверных и оконных проемов, а также для создания различных металлических конструкций</strong> в промышленности.',
                        imgSrc: 'metallicheskij-ugolok-iz-sklada-metalla.jpg',
                        imgAlt: 'Фото металлического уголка',
                        imgTitle: 'Металлический уголок – это металлический профиль, который имеет форму угла',
                        link: '/ugolok/',
                    },
                    {
                        title: 'Заглушки',
                        text: 'Заглушки - это элементы для герметичного закрытия труб и других конструкций. Их использование позволяет предотвратить протечки жидкостей и газов, защитить конструкции от загрязнения и коррозии, а также улучшить внешний вид готовых изделий. Заглушки могут быть изготовлены из различных <strong>материалов, таких как металл, пластик, резина</strong> и другие, и иметь различные формы и размеры, чтобы подходить к различным типам труб и конструкций.',
                        imgSrc: 'zaglushki-iz-sklada-metalla.jpg',
                        imgAlt: 'Фото заглушек для труб',
                        imgTitle: 'Заглушки - это элементы для герметичного закрытия труб и других конструкций',
                        link: '/zaglushki/',
                    },
                    {
                        title: 'Полоса металлическая',
                        text: 'Полоса металлическая - это продукт, который широко используется в различных отраслях промышленности, строительства и производства изделий. Она представляет собой длинную и узкую металлическую полосу прямоугольного сечения. Полосы могут быть изготовлены из <strong>разных металлических сплавов</strong>, таких как <strong>сталь, алюминий, латунь</strong> и другие. Полосы металлические используются в качестве конструкционного материала для производства деталей и узлов, а также для изготовления различных изделий, например, оборудования для промышленности, стальных конструкций, металлических изделий и т.д.',
                        imgSrc: 'polosa-metallicheskaya-iz-sklada-metalla.jpg',
                        imgAlt: 'Картинка металлической полосы',
                        imgTitle: 'Полоса металлическая - это продукт',
                        link: '/polosa/',
                    },
                    {
                        title: 'Арматура',
                        text: 'Арматура - это металлический пруток с ребристой поверхностью, который используется для армирования железобетонных конструкций. Она увеличивает прочность и долговечность строительных объектов, повышает их устойчивость к различным внешним воздействиям. Арматура может быть различной формы и размера, а также иметь <strong>разную степень рифлености поверхности</strong> в зависимости от задачи, для которой она предназначена.',
                        imgSrc: 'armatura-iz-sklada-metalla.jpg',
                        imgAlt: 'Картинка арматуры',
                        imgTitle: 'Арматура - это металлический пруток с ребристой поверхностью',
                        link: '/armatura/',
                    },
                    {
                        title: 'Сетка кладочная',
                        text: 'Сетка кладочная - это металлическая сетка, которая используется в строительстве для <strong>армирования стен и других конструкций</strong>. Она изготавливается из сварной проволоки, которая образует ячейки различной формы и размера. Сетка кладочная укладывается между слоями кирпича или блоков и предотвращает их перемещение, увеличивает прочность стены и защищает ее от трещин и разрушений. Это важный элемент в строительстве и широко используется в жилых, коммерческих и промышленных зданиях.',
                        imgSrc: 'setka-kladochnaya-iz-sklada-metalla.jpg',
                        imgAlt: 'Картинка кладочной сетки',
                        imgTitle: 'Сетка кладочная - это металлическая сетка, которая используется в строительстве',
                        link: '/setka/',
                    },
                ]}
            />
        </main>
    )
}