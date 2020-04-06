import React from "react";
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
import CustomSidebar from '../CustomSidebar'

// pages
import Dashboard from "../../pages/dashboard";
import Tables from "../../pages/tables";
import Additem from "../../pages/tables/components/AddItem";
import Charts from "../../pages/charts";
import Users from "../../pages/users";
import Deals from "../../pages/deals";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  // global
  var layoutState = useLayoutState();
  var classes = useStyles();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <CustomSidebar history={props.history} />

        <div id="content_side" style={{ paddingLeft: '20px',     transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s', marginLeft: '90px', transitions: ' paddingLeft 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/manage/items" component={Dashboard} exact />
            <Route path="/app/manage/order" component={Tables} exact />
            <Route path="/app/manage/users" component={Users} exact />
            <Route path="/app/manage/deals" component={Deals} exact />
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
