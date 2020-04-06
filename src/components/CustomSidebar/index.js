import React, { useState } from "react";

import { Typography } from "@material-ui/core";
import ItemImg from '../../Icons/Items_Normal.png';
import OrderImg from '../../Icons/Order_Normal.png';
import UserImg from '../../Icons/Users_Normal.png';
import ManageImg from '../../Icons/Manage_Normal.png';
import LogoutImg from '../../Icons/Logout.png';
import SettingImg from '../../Icons/Settings_Normal.png';
import AdminImg from '../../Icons/Admin_Normal.png';
import ReportsImg from '../../Icons/Reports_Normal.png';
import DealsImg from '../../Icons/Deals_Normal.png';
import LeftArrow from '../../Icons/Left arrow_white.png';
import RightArrow from '../../Icons/Right arrow_white.png';

const Sidebar = props => {
  const [showSidebarTwo, setSidebarTwo] = useState(true);

  const toggle = () => {
    let x = document.getElementById("padding_side");
    let p = document.querySelector("#padding_side > div");
    if (x.style.width == "20px") {
      x.style.width = "140px";
      p.style.display = "block";
    }
    else {
      x.style.width = "20px";
      p.style.display = "none";
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
  }

  return (
    <div className="main_sidebar" style={{ display: 'flex' }}>
      <div className="fixed_sidebar" style={{ width: '70px', position: 'relative' }}>
        <div className="top_part">
          <div className="sidebar_one_menu main_top">
            <div className="menu_list" onClick={() => {
              props.history.replace('/app/manage/dashboard')
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
      <div id="padding_side" className="sidebar_scroll" style={{ width: '20px', transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}>
        <div className="scroll_sidebar">

          <div className={props.history.location && props.history.location.pathname === '/app/manage/dashboard' ? "this_address" : "menu_list"}
            onClick={() => {
              props.history.replace('/app/manage/dashboard')
            }}
          >
            <div className="scroll_item">
              <img src={ItemImg} alt="sidebar icon" width="30" height="30" className="side_img" />
            </div>
            <Typography className="scroll_item_text">Dashboard</Typography>
          </div>

          <div className={props.history.location && props.history.location.pathname === '/app/manage/items' ? "this_address" : "menu_list"}
            onClick={() => {
              props.history.replace('/app/manage/items')
            }}
          >
            <div className="scroll_item">
              <img src={OrderImg} alt="sidebar icon" width="30" height="30" className="side_img" />
            </div>
            <Typography className="scroll_item_text">Items</Typography>
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
      <div className="scroll_btn">
        <div className="icon_clik" onClick={() => { toggle() }}>{showSidebarTwo === false ?
          <img src={LeftArrow} style={{ color: '#ffffff', height: '13px', width: '13px' }} /> :
          <img src={RightArrow} style={{ color: '#ffffff', height: '13px', width: '13px' }} />}
        </div></div>
    </div>
  )
}

export default Sidebar;