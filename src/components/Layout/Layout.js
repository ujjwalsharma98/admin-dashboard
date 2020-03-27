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
  Grid,
} from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import Styled from 'styled-components'
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";
import ParentSidebar from '../ParentSideBar'
import ChildSidebar from '../ChildSideBar'

// pages
import Dashboard from "../../pages/dashboard"; 
import Tables from "../../pages/tables"; 
import Additem from "../../pages/tables/components/AddItem";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";

// const ButtonOne = Styled.div`
//   background-color: pink;
//   border-radius: 10px;
//   height: 20px;
//   position: relative;
//   left: -1%;
//   top: 80px;
// `

// const ButtonTwo = Styled.div`
//   background-color: pink;
//   border-radius: 10px;
//   height: 20px;
//   position: relative;
//   left: -1%;
//   top: 80px;
// `

function Layout(props) {
  var classes = useStyles();
  const [showSidebarOne, setSidebarOne] = useState(true);
  const [showSidebarTwo, setSidebarTwo] = useState(true);

  const SidebarViewOne = () => {
    if(showSidebarOne){
      setSidebarOne(false)
    }else{
      setSidebarOne(true)
    }
  }

  const SidebarViewTwo = () => {
    if(showSidebarTwo){
      setSidebarTwo(false)
    }else{
      setSidebarTwo(true)
    }
  }

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          {/* {showSidebarOne ? <Sidebar/> : ''} */}
          
          <ParentSidebar/>
          {showSidebarTwo ? <ChildSidebar/> : ''}
          
          <IconButton className="toogle_btn" onClick={() => {
            SidebarViewTwo()
          }}
          >
            <ArrowForwardIosIcon className="sidebar_arrow"></ArrowForwardIosIcon>
          
          </IconButton>
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />

            <Switch>
              <Route path="/app/dashboard" component={Dashboard} /> 
              <Route path="/app/tables" component={Tables} exact/>
              <Route path="/app/tables/additem" component={Additem} exact /> 
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
