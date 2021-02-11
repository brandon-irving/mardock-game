import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useGetBagOptions } from '../hooks/useGetBagOptions'
import { map } from 'lodash';
import UseBaseForm from './forms/UseBaseForm';
import EquipBaseForm from './forms/EquipBaseForm';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Bag() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const options = useGetBagOptions()
  const bagLabels = ['Items', 'Weapons', 'Armor', 'Accessories', 'Special Items']
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
              variant="scrollable"

        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
          {map(bagLabels, (label, i)=><Tab key={label} label={label} {...a11yProps(i)} />)}
      </Tabs>
      <TabPanel value={value} index={0}>
        <UseBaseForm type="use" options={options.misc} />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <EquipBaseForm type="equip" options={options.weapons} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <EquipBaseForm type="equip" options={options.armor} />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <EquipBaseForm type="accessory" options={options.accessories} />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <EquipBaseForm type="specialItems" options={options.specialItems} />
      </TabPanel>

    </div>
  );
}