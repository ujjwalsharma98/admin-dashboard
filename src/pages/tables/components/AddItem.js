import React from "react";
import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Table  from '@material-ui/core/Table';
import  TextField from '@material-ui/core/TextField';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import PageTitle from "../../../components/PageTitle";  

const Additem = () => {
    return(
        <>
        <div>
            <Link to="/app/tables">
                <button>Back</button>
            </Link>
            <PageTitle title="Add new item" />
        </div>
        
    <TableContainer className="tabelContainer" style={{padding:"50px 20px"}} >
        {/* first grid */}
    <Grid container  className="add_itemContainer" >         
        <Grid item xs={4}   className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Id"
          multiline
          variant="outlined"/>
        </Grid>

        <Grid item xs={4} className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Price"
          multiline
          variant="outlined"/>
        </Grid>
        <Grid item xs={4} className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Solo Price"
          multiline
          variant="outlined"/>
        </Grid>
           </Grid>
           {/* second grid */}
                   
    <Grid container  className="add_itemContainer" >         
        <Grid item xs={4}   className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Group Price"
          multiline
          variant="outlined"/>
        </Grid>

        <Grid item xs={4} className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Unit Size"
          multiline
          variant="outlined"/>
        </Grid>
        <Grid item xs={4} className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Name"
          multiline
          variant="outlined"/>
        </Grid>
           </Grid>
           {/* third grid */}
                   
    <Grid container  className="add_itemContainer" >         
        <Grid item xs={4}   className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Seller Name"
          multiline
          variant="outlined"/>
        </Grid>

        <Grid item xs={4} className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Seller Location"
          multiline
          variant="outlined"/>
        </Grid>
        <Grid item xs={4} className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Category"
          multiline
          variant="outlined"/>
        </Grid>
           </Grid>
           {/* fourth grid */}
                   
    <Grid container  className="add_itemContainer" >         
        <Grid item xs={4}   className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Quantity"
          multiline
          variant="outlined"/>
        </Grid>

        <Grid item xs={4} className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Rating"
          multiline
          variant="outlined"/>
        </Grid>
        <Grid item xs={4} className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Rating Count"
          multiline
          variant="outlined"/>
        </Grid>
           </Grid>

           {/* fifth grid */}
                 
    <Grid container  className="add_itemContainer"  >         
        <Grid item xs={4}   className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Item Condition"
          multiline
          variant="outlined"/>
        </Grid>

        <Grid item xs={4} className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Transaction  Status"
          multiline
          variant="outlined"/>
        </Grid>
        <Grid item xs={4} className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Merchant item sold "
          multiline
          variant="outlined"/>
        </Grid>
           </Grid>
           {/* sixth grid */}
                   {/* first grid */}
    <Grid container  className="add_itemContainer" >         
        <Grid item xs={4}   className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Trending "
          multiline
          variant="outlined"/>
        </Grid>

        <Grid item xs={4} className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="In stock"
          multiline
          variant="outlined"/>
        </Grid>
        <Grid item xs={4} className="add_fieldCol">
        
        </Grid>
           </Grid>

{/* description container */}
<Grid container  className="add_itemContainer" >         
        <Grid item xs={12}   className="add_fieldCol">
        <TextField
          className="add_textField"
          id="outlined-textarea"          
          placeholder="Description"
          rows="5"
          multiline
          variant="outlined"/>
        </Grid>
        </Grid>
        <Grid container  className="add_itemContainer" >         
        <Grid item xs={12}   className="add_fieldCol">
       <Button variant="outlined" className="additem_btn" >Browse Image</Button>
        </Grid>
        </Grid>




    </TableContainer>
    </>

        
    )
}

export default Additem;