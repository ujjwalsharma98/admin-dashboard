import React, { useState } from "react";
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
import ChildSidebar from '../ChildSideBar'

// pages
import Dashboard from "../../pages/dashboard"; 
import Tables from "../../pages/tables"; 
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";

const Button = Styled.div`
    background-color: pink;
    border-radius: 10px;
    height: 20px;
    position: relative;
    left: -1%;
    top: 80px;
`

function Layout(props) {
  var classes = useStyles();
  const [showSidebar, setSidebar] = useState(true);

  const SidebarView = () => {
    if(showSidebar){
      setSidebar(false)
    }else{
      setSidebar(true)
    }
  }

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          {showSidebar ? <ChildSidebar/> : ''}
          <Button onClick={() => {
            SidebarView()
          }}
          >Click
          </Button>
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} /> 
              <Route path="/app/tables" component={Tables} /> 
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
