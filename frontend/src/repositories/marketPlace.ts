import {ITender} from "../models";
import photo from '../assets/unrecognized-item.jpg'

export const marketPlace: ITender[] = [
    {
        id: 1,
        name: 'Линзы однодневки',
        cost: 550,
        description: '6 линз -1,75',
        image: photo
    },
    {
        id: 2,
        name: 'Кофе молотый',
        cost: 300,
        description: 'Кофе от TastyCoffee Nutty и Berry среднего помола для чашки, использовалось всего 2 чайные ложки, обжарка 25.11',
        image: photo
    },
    {
        id: 3,
        name: 'Чайник электрический',
        cost: 250,
        image: photo
    }
]
