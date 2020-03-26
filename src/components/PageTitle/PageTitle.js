import React from "react";
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import DeatilIcon from './View_Details_Icon.png';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    <div >
      <Grid container style={{marginBottom:'30px', }}>
      <Grid item xs={6}>
      <Typography className="main_heading" variant="h1" size="sm">
        {props.title}
      </Typography>
      </Grid>
      <Grid item xs={6}>
      <InputBase
        className="seach_btn"
        placeholder="Search by"><SearchIcon /></InputBase></Grid>
      </Grid>
    </div>
  );
}
