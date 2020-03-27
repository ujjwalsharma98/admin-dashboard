import React, { useState } from "react";
import LockIcon from '@material-ui/icons/Lock';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FormControl from '@material-ui/core/FormControl';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  IconButton,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";
import google from "../../images/google.svg";
import LoginLogo  from '../../images/login_logo.png';

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

function Login(props) {
  var classes = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("admin@test.com");
  var [passwordValue, setPasswordValue] = useState("admin");

  return (
    <Grid container className="login_container" >
     <Grid item xs={6} className="logo_col">
        <img src={LoginLogo} alt="logo" className="login_logo" />
        </Grid>
        
        <Grid item xs={6}  className="form_col">
      <div className={classes.formContainer}>
        <div className={classes.form}>
        <Typography className="signin_text">Sign IN</Typography>
        <Typography className="signin_des">Hello! Sign in and start using Dashboard</Typography>
           
         <div className="email_field"><div><IconButton className="mail_icon"><AlternateEmailIcon/></IconButton></div> <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Your Email Adress"
                type="email"
                label="EMAIL"
                style={{margin:'0'}}
                fullWidth
              /></div>     
        
        <div className="password_field"><div><IconButton className="password_icon"><LockIcon/></IconButton></div><TextField id="input-with-icon-grid" 
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Your Password"
                type="password"
                label="PASSWORD"
                style={{margin:'0'}}
               
                fullWidth /> </div>
                <IconButton  onClick={() =>
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                      )
                    }  className="signin_btn">
                  Sign in <ArrowForwardIcon/>
                </IconButton>
       
              

            
        </div>
 
      </div>
      </Grid>
    </Grid>
  );
}

export default withRouter(Login);
