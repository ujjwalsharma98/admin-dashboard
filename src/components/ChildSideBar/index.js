import React from "react";
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


const ChildSidebar = props => {
    return(
        <div className="sidebar_two">
        <MenuList className="sidebar_two_menu">
        <MenuItem className="Side_MenuList"  > <img src={OrderImg} alt="sidebar icon" className="side_img"/>Order</MenuItem>
        <MenuItem className="Side_MenuList" ><img src={ItemImg} alt="sidebar icon" className="side_img"/>Items</MenuItem>
        <MenuItem   className="Side_MenuList" > <img src={UserImg} alt="sidebar icon" className="side_img"/>Users</MenuItem>
        <MenuItem  className="Side_MenuList" > <img src={DealsImg} alt="sidebar icon" className="side_img"/>Deals</MenuItem>
        </MenuList>

        </div>
    )
}

export default ChildSidebar;