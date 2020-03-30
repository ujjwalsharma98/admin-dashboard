import React, {useEffect, useState, makeStyles} from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import EditImg from './Edit_Icon.png';
import DeatilIcon from './View_Details_Icon.png';

import { API_URL } from "../../Services"
// components
import PageTitle from "../../components/PageTitle";  
import AddEditItem from "./components/AddEditItem";

const headCells = [
  { id: 'id', numeric: true, disablePadding: false, label: 'Id' },
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'sellerName', numeric: false, disablePadding: true, label: 'Seller Name' },
  { id: 'category', numeric: false, disablePadding: true, label: 'Category' },
  { id: 'description', numeric: false, disablePadding: true, label: 'Description' },
  { id: 'quantity', numeric: true, disablePadding: false, label: 'Quantity' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'rating', numeric: true, disablePadding: false, label: 'Rating' },
  { id: 'condition', numeric: false, disablePadding: true, label: 'Condition' },
  { id: 'transaction', numeric: false, disablePadding: true, label: 'Transaction' },
  { id: 'actions', numeric: false, disablePadding: true, label: 'Actions' },
];

export default function Tables(props) {
  const [datatableData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const fetchLimit = rowsPerPage*(page+2)
  
  const [url, setUrl] = useState(`${API_URL}/api/v1/int-tool/item?page=0&size=${rowsPerPage}&sort=price,DESC`);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setUrl(`${API_URL}/api/v1/int-tool/item?page=0&size=${fetchLimit}&sort=price,DESC`)
    fetchData(url);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    let pageLength = parseInt(event.target.value, 10)
    setUrl(`${API_URL}/api/v1/int-tool/item?page=0&size=${pageLength}&sort=price,DESC`)
    fetchData(url);
  };

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
        <Grid item xs={12}>
        {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <TableContainer className="tabelContainer" >
          <Table className="tabel" style={{zoom:'70%'}}>
            <TableHead>
              <TableRow className="tabelHead_row">
              {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
              >
                {headCell.label}
              </TableCell>
        ))}
              </TableRow>
            </TableHead>
            <TableBody className="tabelBody">
              {(rowsPerPage > 0
              ? datatableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : datatableData
              ).map((element) => (
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
            rowsPerPageOptions={[5, 10, 25, 50, { label: 'All', value: -1 }]}
            colSpan={3}
            count={-1}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: { 'aria-label': 'rows per page' },
              native: true,
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
        )}
        </Grid> 
        <Link to="/app/tables/additem">
          <button>Add Item</button>
        </Link>
      </Grid>
    </>
  ); 
}
