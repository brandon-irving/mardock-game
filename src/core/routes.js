import { AccountCircle, Store } from '@material-ui/icons';
import Home from '@material-ui/icons/Home';
import ImageIcon from '../common/ImageIcon';
import fist from '../images/fist.svg'

const routes = [
    {
        route: '/mardock-game',
        title: 'Home',
        icon: <Home />,
    },
    {
        route: '/Character',
        title: 'Character',
        icon: <AccountCircle />,
    },
    {
        route: '/Battle',
        title: 'Battle',
        icon: <ImageIcon width='7vw' src={fist} alt="battle" />,
    },
    {
        route: '/Store',
        title: 'Store',
        icon: <Store />,
    },
]

export default routes