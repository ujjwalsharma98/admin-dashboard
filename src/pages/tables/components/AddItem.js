import React from "react";
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

import PageTitle from "../../../components/PageTitle";  

const Additem = () => {
    return(
        <div>
            <PageTitle title="Add new item" />
        </div>
    )
}

export default Additem;