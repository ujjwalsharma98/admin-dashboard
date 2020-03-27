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
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
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

const Bar = Styled.div`
  width: 20px;
  background-color: #ffe77b;
`

function Layout(props) {
  // global
  var layoutState = useLayoutState();
  var classes = useStyles();
  const [showSidebarTwo, setSidebarTwo] = useState(true);

  const SidebarViewTwo = () => {
    if(showSidebarTwo){
      setSidebarTwo(false)
    }else{
      setSidebarTwo(true)
    }
  }

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <ParentSidebar/>
          {showSidebarTwo ? <ChildSidebar/> : <Bar/>}
          <IconButton className="toogle_btn" onClick={() => {
            SidebarViewTwo()
          }}
          >

          {showSidebarTwo === false ? <ArrowForward className="sidebar_arrow"></ArrowForward> : <ArrowBack className="sidebar_arrow"></ArrowBack>}
          
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
