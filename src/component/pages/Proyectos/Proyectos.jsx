import React from 'react';
//Material-UI
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//Componentes
import AplicacionesReact from "./TipoDeProyecto/AplicacionesReact"
import PaginasWeb from "./TipoDeProyecto/PaginasWeb" 
import AplicacionesJs from "./TipoDeProyecto/AplicacionesJs"

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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" 
        indicatorColor="primary" centered  >
          <Tab label="JavaScript" {...a11yProps(0)} />
          <Tab label="React" {...a11yProps(1)} />
          <Tab label="Paginas Web" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       
      <AplicacionesJs/>
      
     </TabPanel>

      <TabPanel value={value} index={1}>
        
        <AplicacionesReact/>
        
      </TabPanel>

      <TabPanel value={value} index={2}>

        <PaginasWeb/>

      </TabPanel>
    </div>
  );
}











