import React from "react";
import { Link } from 'react-router-dom';
import Styled from 'styled-components'
import MenuList from '@material-ui/core/MenuList';
import ItemImg  from '../../Icons/Items_Normal.png';
import OrderImg  from '../../Icons/Order_Normal.png';
import UserImg  from '../../Icons/Users_Normal.png';
import DealsImg  from '../../Icons/Deals_Normal.png';

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

const ParentSidebar = props => {
    return(
        <div className="sidebar_two">
            <MenuList className="sidebar_two_menu">
                <Link to="/app/dashboard">
                    <MenuItem className="Side_MenuList"  > <img src={OrderImg} alt="sidebar icon" className="side_img"/>Dashboard</MenuItem>
                </Link>
                <Link to="/app/tables">
                <MenuItem className="Side_MenuList"  > <img src={OrderImg} alt="sidebar icon" className="side_img"/>Table</MenuItem>
                </Link>
            </MenuList>
        </div>
    )
}

export default ParentSidebar;