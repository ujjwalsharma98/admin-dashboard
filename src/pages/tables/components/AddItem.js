import React, { useEffect } from "react";
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
    
    // const handleSubmit = () => {
    //     var data = new FormData();
    //     const payload = {
    //     id: id.id.getValue(),
    //     price: id.price.getValue(),
    //     soloPrice: id.soloPrice.getValue(),
    //     groupPrice: id.groupPrice.getValue(),
    //     unitSize: id.unitSize.getValue(),
    //     name: id.name.getValue(),
    //     sellerName: id.sellerName.getValue(),
    //     sellerLocation: id.sellerLocation.getValue(),
    //     category: id.category.getValue(),
    //     quantity: id.quantity.getValue(),
    //     rating: id.rating.getValue(),
    //     ratingCount: id.ratingCount.getValue(),
    //     itemCondition: id.itemCondition.getValue(),
    //     transactionStatus: id.transactionStatus.getValue(),
    //     merchantItemSold: id.itemSold.getValue(),
    //     trending: id.trending.getValue(),
    //     inStock: id.inStock.getValue(),
    //     description: id.description.getValue(),
    // };
    // data.append("myjsonkey", JSON.stringify(payload));

    useEffect(() => {
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        // };
        // fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        //     .then(response => response.json())
        //     .then(data => setPostId(data.id));
    },[])

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
                id="id"          
                placeholder="Id"
                multiline
                variant="outlined"
                />
            </Grid>
            <Grid item xs={4} className="add_fieldCol">
                <TextField
                className="add_textField"
                id="price"          
                placeholder="Price"
                multiline
                variant="outlined"/>
            </Grid>
            <Grid item xs={4} className="add_fieldCol">
                <TextField
                className="add_textField"
                id="soloPrice"          
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
                id="groupPrice"          
                placeholder="Group Price"
                multiline
                variant="outlined"/>
            </Grid>
            <Grid item xs={4} className="add_fieldCol">
                <TextField
                className="add_textField"
                id="unitPrice"          
                placeholder="Unit Size"
                multiline
                variant="outlined"/>
            </Grid>
            <Grid item xs={4} className="add_fieldCol">
                <TextField
                className="add_textField"
                id="name"          
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
                id="sellerName"          
                placeholder="Seller Name"
                multiline
                variant="outlined"/>
            </Grid>
            <Grid item xs={4} className="add_fieldCol">
                <TextField
                className="add_textField"
                id="sellerLocation"          
                placeholder="Seller Location"
                multiline
                variant="outlined"/>
            </Grid>
            <Grid item xs={4} className="add_fieldCol">
                <TextField
                className="add_textField"
                id="category"          
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
                id="quantity"          
                placeholder="Quantity"
                multiline
                variant="outlined"/>
            </Grid>
            <Grid item xs={4} className="add_fieldCol">
                <TextField
                className="add_textField"
                id="rating"          
                placeholder="Rating"
                multiline
                variant="outlined"/>
            </Grid>
            <Grid item xs={4} className="add_fieldCol">
                <TextField
                className="add_textField"
                id="ratingCount"          
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
                id="itemCondition"          
                placeholder="Item Condition"
                multiline
                variant="outlined"/>
            </Grid>
            <Grid item xs={4} className="add_fieldCol">
                <TextField
                className="add_textField"
                id="transactionStatus"          
                placeholder="Transaction  Status"
                multiline
                variant="outlined"/>
            </Grid>
            <Grid item xs={4} className="add_fieldCol">
                <TextField
                className="add_textField"
                id="itemSold"          
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
                id="trending"          
                placeholder="Trending "
                multiline
                variant="outlined"/>
            </Grid>
            <Grid item xs={4} className="add_fieldCol">
                <TextField
                className="add_textField"
                id="inStock"          
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
                id="description"          
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