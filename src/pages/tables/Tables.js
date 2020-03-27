import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditImg from './Edit_Icon.png';
import DeatilIcon from './View_Details_Icon.png';
import iicccoonn  from '../../Icons/Admin_Normal.png';

import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import { API_URL } from "../../Services"
// components
import PageTitle from "../../components/PageTitle";  
import AddEditItem from "./components/AddEditItem";

export default function Tables() {
  const [datatableData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(
    `${API_URL}/api/v1/int-tool/item?page=0&size=100&sort=price,DESC`);

  /**
   * Fetch the data on Page Load
   */
  const fetchData = async () => {
    setIsLoading(true);
     const response = await fetch(url);
     const result   = await response.json(); 
     setData(result.payload);
     setIsLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return (
    <>
      <PageTitle title="Items" />
      <Grid container spacing={4}> 
        <AddEditItem /> 
        <Grid item xs={12}>
        {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <TableContainer className="tabelContainer" >
          <Table className="tabel" style={{zoom:'70%'}}>
            <TableHead >
              <TableRow className="tabelHead_row">
                <TableCell><span>Id</span></TableCell>
                <TableCell><span>Name</span></TableCell>
                <TableCell><span>Seller Name</span></TableCell>
                <TableCell><span>Category</span></TableCell>
                <TableCell><span>Description</span></TableCell>
                <TableCell><span>Quantity</span></TableCell>
                <TableCell><span>Price</span></TableCell>
                <TableCell><span>Rating</span></TableCell>
                <TableCell><span>Condition</span></TableCell>
                <TableCell><span>Transction</span></TableCell>
                <TableCell><span>Actions</span></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tabelBody">
              {datatableData.map((element) => (
                <TableRow className="tabelBody_row" >
                  <TableCell>{element.id}</TableCell>
                  <TableCell>{element.name}</TableCell>
                  <TableCell>{element.sellerName}</TableCell>
                  <TableCell>{element.category}</TableCell>
                  <TableCell><a href="#">See more</a></TableCell>
                  <TableCell>{element.quantity}</TableCell>
                  <TableCell>{element.price}</TableCell>
                  <TableCell>{element.rating}</TableCell>
                  <TableCell>{element.itemCondition}</TableCell>
                  <TableCell><Button variant="outlined" className="success_btn" >Success</Button></TableCell>
                  <TableCell><img src={DeatilIcon} alt="logo" className="actionIcon"/> <img src={EditImg} alt="logo" className="actionIcon" style={{marginLeft: '5px'}}  /> </TableCell>
                </TableRow>
              ))}        
            </TableBody>       
          </Table>
          <TablePagination
          />
        </TableContainer>

          // <MUIDataTable
          //   title="Employee List"
          //   className="tabel"
          //   data={datatableData.map(item => {
          //     return [
          //         item.id,
          //         item.price,
          //         item.sellerName,
          //         item.soloPrice,
          //         item.groupPrice,
          //         item.price,
          //         item.category,
          //         item.itemCondition,
          //     ]
          // })}
          //   columns={["ID", "Price", "Seller Name", "Solo Price", "Group Price", "Price", "Category", "Item Condition"]}
          //   options={{
          //     filterType: "checkbox",
          //   }}
          // />
          )}
        </Grid> 
        <Link to="/app/tables/additem">
          <button>Add Item</button>
        </Link>
      </Grid>
    </>
  );
}
