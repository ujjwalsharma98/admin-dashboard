import React, { useState } from "react";
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
  Typography,
  Grid,
} from "@material-ui/core";
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";
// import ParentSidebar from '../ParentSideBar'
// import ChildSidebar from '../ChildSideBar'

// pages
import Dashboard from "../../pages/dashboard";
import Tables from "../../pages/tables";
import Additem from "../../pages/tables/components/AddItem";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";

import MenuList from '@material-ui/core/MenuList';
import ItemImg from '../../Icons/Items_Normal.png';
import OrderImg from '../../Icons/Order_Normal.png';
import UserImg from '../../Icons/Users_Normal.png';
import ManageImg from '../../Icons/Manage_Normal.png';
import LogoutImg from '../../Icons/Logout.png';
import SettingImg from '../../Icons/Settings_Normal.png';
import AdminImg from '../../Icons/Admin_Normal.png';
import ReportsImg from '../../Icons/Reports_Normal.png';
// import ItemImg  from '../../Icons/Items_Normal.png';
// import OrderImg  from '../../Icons/Order_Normal.png';
// import UserImg  from '../../Icons/Users_Normal.png';
import DealsImg from '../../Icons/Deals_Normal.png';
import transitions from "@material-ui/core/styles/transitions";

function Layout(props) {
  // global
  var layoutState = useLayoutState();
  var classes = useStyles();
  const [showSidebarTwo, setSidebarTwo] = useState(true);

  const toggle = () => {
    var x = document.getElementById("padding_side");
    if (x.style.width == "20px") {
      x.style.width = "140px";
    } else {
      x.style.width = "20px";
    }
    var y = document.getElementById("content_side");
    if (y.style.paddingLeft == "20px") {
      y.style.paddingLeft = "140px";
    } else {
      y.style.paddingLeft = "20px";
    }
    if (showSidebarTwo === true) {
      setSidebarTwo(false)
    } else if (showSidebarTwo === false) {
      setSidebarTwo(true)
    }
    //   var c = document.getElementById("icon_rotate");
    //   if (y.style.transform == "rotate(180deg)") {
    //     y.style.transform = "rotate(0deg)";
    //   } else {
    //     y.style.transform = "rotate(180deg)";
    //   }
  }

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <div className="main_sidebar" style={{ display: 'flex' }}>
          <div className="fixed_sidebar" style={{ width: '70px', position: 'relative' }}>
            <div className="top_part">
              <div className="sidebar_one_menu main_top">
                <div className="menu_list" onClick={() => {
                  props.history.replace('/app/manage/items')
                }}>
                  <div classnames="menu_list_item">
                    <img src={ManageImg} alt="sidebar icon" width="30" height="30" className="side_img" />
                  </div>
                  <Typography className="side_menu_text">Manage</Typography>
                </div>
                <div className="menu_list">
                  <div classnames="menu_list_item">
                    <img src={ReportsImg} alt="sidebar icon" width="30" height="30" className="side_img" />
                  </div>
                  <Typography className="side_menu_text">Reports</Typography>
                </div>
                <div className="menu_list">
                  <div classnames="menu_list_item">
                    <img src={AdminImg} alt="sidebar icon" width="30" height="30" className="side_img" />
                  </div>
                  <Typography className="side_menu_text">Admin</Typography>
                </div>
              </div>
            </div>
            <div className="bottom_part">
              <div className="sidebar_one_menu main_top">
                <div className="menu_list">
                  <div classnames="menu_list_item">
                    <img src={SettingImg} alt="sidebar icon" width="30" height="30" className="side_img" />
                  </div>
                  <Typography className="side_menu_text">Setting</Typography>
                </div>
                <div className="menu_list">
                  <div classnames="menu_list_item">
                    <img src={LogoutImg} alt="sidebar icon" width="30" height="30" className="side_img" />
                  </div>
                  <Typography className="side_menu_text">Logout</Typography>
                </div>
              </div>
            </div>
          </div>
          <div id="padding_side" className="sidebar_scroll" style={{ width: '20px' }}>
            <div className="scroll_sidebar">

              <div className={props.history.location && props.history.location.pathname === '/app/manage/items' ? "this_address" : "menu_list"}
                onClick={() => {
                  props.history.replace('/app/manage/items')
                }}
              >
                <div className="scroll_item">
                  <img src={ItemImg} alt="sidebar icon" width="30" height="30" className="side_img" />
                </div>
                <Typography className="scroll_item_text">Items</Typography>
              </div>

              <div className={props.history.location && props.history.location.pathname === '/app/manage/order' ? "this_address" : "menu_list"}
                onClick={() => {
                  props.history.replace('/app/manage/order')
                }}
              >
                <div className="scroll_item">
                  <img src={OrderImg} alt="sidebar icon" width="30" height="30" className="side_img" />
                </div>
                <Typography className="scroll_item_text">Order</Typography>
              </div>

              <div className={props.history.location && props.history.location.pathname === '/app/manage/users' ? "this_address" : "menu_list"}
                onClick={() => {
                  props.history.replace('/app/manage/users')
                }}
              >
                <div className="scroll_item">
                  <img src={UserImg} alt="sidebar icon" width="30" height="30" className="side_img" />
                </div>
                <Typography className="scroll_item_text">Users</Typography>
              </div>

              <div className={props.history.location && props.history.location.pathname === '/app/manage/deals' ? "this_address" : "menu_list"}
                onClick={() => {
                  props.history.replace('/app/manage/deals')
                }}
              >
                <div className="scroll_item">
                  <img src={DealsImg} alt="sidebar icon" width="30" height="30" className="side_img" />
                </div>
                <Typography className="scroll_item_text">Deals</Typography>
              </div>
            </div>
          </div>
          {/* <ParentSidebar/>
              {showSidebarTwo ? <ChildSidebar/> : <Bar/>} */}
          <div className="scroll_btn">
            <div className="icon_clik" onClick={() => { toggle() }}>{showSidebarTwo === false ?
              <ArrowForward id="icon_rotate" style={{ color: 'white', transform: 'rotate(180deg)', height: '15px', width: '15px' }} /> :
              <ArrowBack style={{ color: 'white', transform: 'rotate(180deg)', height: '15px', width: '15px' }}></ArrowBack>}
            </div></div>
        </div>

        <div id="content_side" style={{ paddingLeft: '20px', marginLeft: '90px', transitions: ' paddingLeft 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/manage/items" component={Tables} exact />
            <Route path="/app/manage/order" component={Dashboard} exact />
            <Route path="/app/manage/items/additem" component={Additem} exact />
            <Route path="/app/manage/items/update/:id" component={Additem} exact />
            <Route path="/app/manage/items/detail/:id" component={Additem} exact />
            <Route
              exact
              path="/app/ui"
              render={() => <Redirect to="/app/ui/icons" />}
            />
            <Route path="/app/ui/charts" component={Charts} />
            <Redirect
              from="/"
              to="/app/manage/items"
            />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
