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

class Additem extends React.Component{
    constructor(props) {
        super(props);
        this.onSubmit=this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        var data = new FormData();
        const payload = {
        id: this.id.id.getValue(),
        price: this.id.price.getValue(),
        soloPrice: this.id.soloPrice.getValue(),
        groupPrice: this.id.groupPrice.getValue(),
        unitSize: this.id.unitSize.getValue(),
        name: this.id.name.getValue(),
        sellerName: this.id.sellerName.getValue(),
        sellerLocation: this.id.sellerLocation.getValue(),
        category: this.id.category.getValue(),
        quantity: this.id.quantity.getValue(),
        rating: this.id.rating.getValue(),
        ratingCount: this.id.ratingCount.getValue(),
        itemCondition: this.id.itemCondition.getValue(),
        transactionStatus: this.id.transactionStatus.getValue(),
        merchantItemSold: this.id.itemSold.getValue(),
        trending: this.id.trending.getValue(),
        inStock: this.id.inStock.getValue(),
        description: this.id.description.getValue(),
    };
    data.append("myjsonkey", JSON.stringify(payload));

    fetch('http://ec2-3-7-0-164.ap-south-1.compute.amazonaws.com:8080/api/v1/int-tool/item',{
        method: 'POST',
        headers: {
        'Accept': 'application/json'
    },
        body: data
    })
    .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
    }

    render() {
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
                <form onSubmit={this.onSubmit}>
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
                </form>
            </TableContainer>
        </>
    )}
}

export default Additem;