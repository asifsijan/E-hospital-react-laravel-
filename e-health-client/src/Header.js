import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Home from './components/Home';
import PostBlog from './components/PostBlog';
import Request from './components/Request';
import Complaint from './components/Complaint';

import Register from './components/Register';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
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
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        }}
        {...props}
        />
        );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>



      <div className="container">
        
      


      <div class="col-3 ml-auto text-right py-4 mx-5">
        <button class="button btn-outline-secondary"><a href="/home">Logout</a></button>  
      </div>
      <AppBar position="static" style={{ background: 'white' }}>
        <Tabs

          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="nav tabs example"
          centered

          >
          <LinkTab label="Home" href="" {...a11yProps(0)} />
          <LinkTab label="Post Blog" href="" {...a11yProps(1)} />
          <LinkTab label="Requests" href="" {...a11yProps(2)} />
          <LinkTab label="Complain" href="" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PostBlog />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Request />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Complaint />
      </TabPanel>
      </div>
      </div>
      );
}
