import React, { useEffect, useState, makeStyles } from "react";
import { Link } from 'react-router-dom';
import { Grid, IconButton, Typography } from "@material-ui/core";
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
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Dummydata from './components/data.json'

import { API_URL } from "../../Services"
// components
import PageTitle from "../../components/PageTitle";

const headCells = [
  { id: 'id', numeric: true, disablePadding: false, label: 'Id' },
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'price', numeric: true, disablePadding: true, label: 'Price' },
  { id: 'soloPrice', numeric: true, disablePadding: true, label: 'Solo Price' },
  { id: 'groupPrice', numeric: false, disablePadding: true, label: 'Group Price' },
  { id: 'unitSize', numeric: false, disablePadding: true, label: 'Unit Size' },
  { id: 'category', numeric: true, disablePadding: false, label: 'Category' },
  { id: 'description', numeric: true, disablePadding: false, label: 'Description' },
  { id: 'images', numeric: true, disablePadding: false, label: 'Images' },
  { id: 'trending', numeric: false, disablePadding: true, label: 'Trending' },
  { id: 'inStock', numeric: false, disablePadding: true, label: 'In Stock' },
  { id: 'actions', numeric: false, disablePadding: true, label: 'Actions' },
];

export default function Tables(props) {
  const history = useHistory();
  const { payload } = Dummydata;
  const [datatableData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortBy, setSortBy] = useState('id')
  const [sortOrder, setSortOrder] = useState('ASC')
  const [url, setUrl] = useState(`${API_URL}/api/v1/int-tool/item?page=0&size=${rowsPerPage}&sort=${sortBy},${sortOrder}`);

  const fetchLimit = rowsPerPage * (page + 2)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setUrl(`${API_URL}/api/v1/int-tool/item?page=0&size=${fetchLimit}&sort=${sortBy},${sortOrder}`)
    fetchData(url);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    let pageLength = parseInt(event.target.value, 10)
    setUrl(`${API_URL}/api/v1/int-tool/item?page=0&size=${pageLength}&sort=${sortOrder},${sortOrder}`)
    fetchData(url);
  };

  const changeSorting = headCell => {
    if (headCell.numeric === true) {
      setUrl(`${API_URL}/api/v1/int-tool/item?page=0&size=${fetchLimit}&sort=${headCell.id},${sortOrder}`)
      fetchData(url);
    }
    else {
      console.log("Check for more cases")
    }
  }

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    setData(result.payload);
    setIsLoading(false);
  };

  const aa = async () => {
    setIsLoading(true);
    const value = 'M'
    const apiUrl = API_URL + `api/v1/item/search?keyword=${value}&sort=${sortBy},${sortOrder}&page=0&size=15`;
    axios.get(apiUrl)
      .then(function (response) {
        debugger;
      }).catch(error => {
        debugger;
      });
  };

  const getItemById = (id) => {
    history.push("/app/manage/items/update/" + id);
  }

  const searchItems = value => {
    if (value) {
      aa();
    }
  }

  const viewDetail = (id) => {
    history.push("/app/manage/items/detail/" + id);
  }

  // useEffect(() => {
  //   fetchData(url);
  // }, [url]);

  return (
    <>
      <PageTitle searchItems={searchItems} title="Items" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {isLoading ? (
            <h1>Loading ...</h1>
          ) : (
              <TableContainer className="tabelContainer" >
                <Table className="tabel" style={{ zoom: '70%' }}>
                  <TableHead>
                    <TableRow className="tabelHead_row">
                      {headCells.map((headCell) => (
                        <TableCell
                          key={headCell.id}
                          onClick={() => {
                            changeSorting(headCell)
                          }}
                        >
                          {headCell.label}
                          {headCell.numeric === true ? <TableSortLabel /> : ''}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody className="tabelBody">
                    {(rowsPerPage > 0
                      ? payload.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      : payload
                    ).map((element, index) => (
                      <TableRow key={index} className="tabelBody_row" >
                        <TableCell>{element.id}</TableCell>
                        <TableCell>{element.name ? element.name.substring(0, 10) + '.....' : ''}</TableCell>
                        <TableCell>{element.price}</TableCell>
                        <TableCell>{element.soloPrice}</TableCell>
                        <TableCell>{element.groupPrice}</TableCell>
                        <TableCell>{element.unitSize}</TableCell>
                        <TableCell>{element.category}</TableCell>
                        <TableCell>{element.description && element.description.description ? element.description.description.substring(0, 9) + '.....' : ''}</TableCell>
                        <TableCell>{element.images && element.images.length > 0 ? element.images[0] : ''}</TableCell>
                        <TableCell>{element.trending}</TableCell>
                        <TableCell>{element.inStock ? 'Yes' : 'No'}</TableCell>
                        <TableCell><img src={DeatilIcon} alt="logo" onClick={() => { viewDetail(element.id) }} className="actionIcon" /> <img src={EditImg} alt="logo" onClick={() => { getItemById(element.id) }} className="actionIcon" style={{ marginLeft: '5px' }} /> </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Grid container >
                  <Grid item xs={9}>
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
                    /></Grid>
                  <Grid item xs={3} className="" >
                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', alignItems: 'flex-end' }}>
                      <Link to="/app/manage/items/additem" style={{ textDecoration: 'none' }}>
                        <IconButton style={{ backgroundColor: 'cadetblue', color: 'white' }}>
                          <AddIcon />
                        </IconButton>
                      </Link><Typography>Add Item</Typography>
                    </div>
                  </Grid>
                </Grid>
              </TableContainer>
            )}
        </Grid>
      </Grid>
    </>
  );
}
