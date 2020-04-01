import React from "react";
import { Link } from 'react-router-dom';
import Styled from 'styled-components'
import MenuList from '@material-ui/core/MenuList';
import ItemImg from '../../Icons/Items_Normal.png';
import OrderImg from '../../Icons/Order_Normal.png';
import UserImg from '../../Icons/Users_Normal.png';
import ManageImg from '../../Icons/Manage_Normal.png';
import LogoutImg from '../../Icons/Logout.png';
import SettingImg from '../../Icons/Settings_Normal.png';
import AdminImg from '../../Icons/Admin_Normal.png';
import ReportsImg from '../../Icons/Reports_Normal.png';

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
    Typography,
} from "@material-ui/core";

const ParentSidebar = props => {
    return (
        <div className="sidebar_one">
            <MenuList className="sidebar_one_menu main_top">
                <Link to="/app/dashboard" style={{ textDecoration: "none" }}>
                    <div className="Side_mainList"  ><div className="icon_box"><img src={ManageImg} alt="sidebar icon" className="side_img" /></div> <Typography className="side_menu_text">Manage</Typography></div>
                </Link>
                <Link to="/app/tables" style={{ textDecoration: "none" }}>
                    <div className="Side_mainList"  ><div className="icon_box"><img src={ReportsImg} alt="sidebar icon" className="side_img" /></div> <Typography className="side_menu_text">Reports</Typography></div>
                </Link>
                <Link to="/app/tables" style={{ textDecoration: "none" }}>
                    <div className="Side_mainList"  ><div className="icon_box"><img src={AdminImg} alt="sidebar icon" className="side_img" /></div> <Typography className="side_menu_text">Admin</Typography></div>
                </Link>
            </MenuList>
            {/* bottom list */}

            <MenuList className="sidebar_one_menu main_bottom">
                <Link to="/app/dashboard" style={{ textDecoration: "none" }}>
                    <div className="Side_mainList"  ><div className="icon_box"><img src={SettingImg} alt="sidebar icon" className="side_img" /></div> <Typography className="side_menu_text">Setting</Typography></div>
                </Link>
                <Link to="/app/tables" style={{ textDecoration: "none" }}>
                    <div className="Side_mainList"  ><div className="icon_box"><img src={LogoutImg} alt="sidebar icon" className="side_img" /></div> <Typography className="side_menu_text">Logout</Typography></div>
                </Link>
            </MenuList>
        </div>
    )
}

export default ParentSidebar;