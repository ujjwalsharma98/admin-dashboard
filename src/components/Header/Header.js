import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
// import FontIcon from 'material-ui/FontIcon';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Icon from '@material-ui/core/Icon';


import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Fab,
  Grid,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import { Badge, Typography } from "../Wrappers/Wrappers";
import Notification from "../Notification/Notification";
import UserAvatar from "../UserAvatar/UserAvatar";
import logo from './kite_logo.png'; // with import

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import { useUserDispatch, signOut } from "../../context/UserContext";

export default function Header(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  var userDispatch = useUserDispatch();

  // local
  var [mailMenu, setMailMenu] = useState(null);
  var [isMailsUnread, setIsMailsUnread] = useState(true);
  var [notificationsMenu, setNotificationsMenu] = useState(null);
  var [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
  var [profileMenu, setProfileMenu] = useState(null);
  var [isSearchOpen, setSearchOpen] = useState(false);
  

  return (
    <AppBar position="fixed" className={classes.appBar+ " menuBar"}>
      <Grid container spacing={3} style={{alignSelf:'center'}}>
        <Grid item xs={6}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} alt="logo" className="menuLogo"  />
        </Toolbar>
      </Grid>
          <Grid item xs={5} style={{alignSelf:'center',  }}>
          <div style={{display:'flex',alignSelf: 'center', color:'black',     float: 'right'}}>    
            <Typography variant="h6" style={{color:'black',display:'flex',alignSelf: 'center'}}>
              Hello, Prateek 
            </Typography>
            <Avatar  alt="Account name" src="/static/images/avatar/1.jpg" style={{margin: '0px 8px'}} />
            
            <div className="dropIcon" style={{display:'flex',alignSelf: 'center'}}>
              {/* <Icon
                aria-controls="simple-menu"
                aria-haspopup="true"
                className="dropdown-btn"
              >
                <ArrowDropDownIcon/>
              </Icon > */}
              {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <ArrowDropDownIcon/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={()=> console.log("Props>>>", props)}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem onClick={() => {
                  console.log("Logged out")
                }}>Logout</MenuItem>
              </Select>
              {/* <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={e => this.handleClose(e)}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu> */}
            </div>
            </div>
          <div style={{ minWidth: '260px', paddingTop: ' 10px' }}>
            <Grid  container>
              <Grid item xs={3}>
              </Grid>
              <Grid	item xs={9} className="profileInfo" 	style={{ alignSelf: 'center' }} >
						</Grid>
            </Grid>
            </div>
          </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </AppBar>
  );
}
