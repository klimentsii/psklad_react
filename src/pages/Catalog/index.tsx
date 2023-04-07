import Grid from "../../components/Grid";
import { Main } from "../../components/Main";

import { profileCollection } from "../../firebase/firebase";
import GridViewIcon from '@mui/icons-material/GridView';

export const Catalog =() => {
    
    return (
        <main>
            <Main title='Надежный партнер в сфере металлоторговли - Склад Металла в Молодечно' bg='main2.jpg' optionalClass=''></Main>
            <Grid 
                title="Купить металлопрокат в нашем каталоге - широкий выбор металлических изделий!" 
                secondClass=''
                gridItems={
                    [
                        {
                            icon: <GridViewIcon />,
                            title: 'Профильная труба',
                            link: '',
                            text: '+375-29-656-10-46',
                        },
                    ]
                } 
            />
        </main>
    )
}