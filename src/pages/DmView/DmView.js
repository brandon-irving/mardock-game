import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Story from './Story'
import { useContextState } from 'dynamic-context-provider';
import { getAllUsers, signOut } from '../../firebase';
import QuickMenu from './QuickMenu';
import { useHistory } from 'react-router-dom';

const DmViewResolver = ({dmUser}) => {
  const history = useHistory()
    const { users, updateContextState } = useContextState()
    const [value, setValue] = React.useState(0);

    const handleChange = (_, newValue) => {
      setValue(newValue);
    };
    async function loadUsers(){
        const users = await getAllUsers()
        console.log('log: dmUser', dmUser)
        updateContextState({ users })
    }   
    function handleSignOut(){
      signOut()
      history.replace('/sign-in')
    }
    React.useEffect(() => {
        loadUsers()
    }, [])
    return (
        <div>
      <AppBar position="static">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Story" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        <IconButton onClick={handleSignOut}  color="inherit" aria-label="signout">
      <ExitToAppIcon />
    </IconButton>
    </div>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Story />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
{users.length > 0 && <QuickMenu />}
    </div>
    )
}

export default DmViewResolver


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

