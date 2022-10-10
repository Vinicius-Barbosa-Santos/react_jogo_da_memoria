import * as C from './styles'
import {GridItemType} from '../../types/GridItemType'
import b7 from '../../svgs/b7.svg'
import { items } from '../../data/items'

type Props = {
    item : GridItemType
    onClick : () => void
}

export const GridItem = ({item, onClick} : Props) => {
    return(
        <C.Container 
                showBackground={item.shown || item.permanentShown}
                onClick={onClick}>
            {item.shown === false && item.permanentShown === false &&
                <C.Icon src={b7} alt=''opacity={.1}/>
            }

            {(item.shown || item.permanentShown) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt=''/>
            }
        </C.Container>
    )
}