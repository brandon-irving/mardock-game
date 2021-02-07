import { AccountCircle, Store } from '@material-ui/icons';
import Home from '@material-ui/icons/Home';

const routes = [
    {
        route: '/',
        title: 'Home',
        icon: <Home />,
    },
    {
        route: '/Character',
        title: 'Character',
        icon: <AccountCircle />,
    },
    {
        route: '/Store',
        title: 'Store',
        icon: <Store />,
    },
]

export default routes