import React from "react";
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import DeatilIcon from './View_Details_Icon.png';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchcIcon from "@material-ui/icons/Search";
import SearchIcon from '@material-ui/icons/Search';
import {

  TextField,

} from "@material-ui/core";
import SearcIcon from '../../Icons/Search_Icon.png';

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";

export default function PageTitle(props) {
  const searchItems = (value) => {
    props.searchItems(value.target.value);
  }
  return (
    <div >
      <Grid container style={{ marginBottom: '30px', }}>
        <Grid item xs={6}>
          <Typography className="main_heading" variant="h1" size="sm">
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          {/* <InputBase
        className="seach_btn"
        placeholder="Search by"><SearchIcon /></InputBase> */}
          <TextField
            placeholder="Search By"
            onChange={searchItems}
            className="seach_btn"
            InputProps={{

              disableUnderline: true,

              endAdornment: (
                <InputAdornment>
                  <IconButton className="srch_icon" style={{ backgroundColor: '#f4f5f7' }} >
                    {/* <img src={SearchcIcon} alt="logo" className="actionIcon"/> */}
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />


        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}



