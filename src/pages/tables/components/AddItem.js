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

const Additem = () => {
    return(
        <div>
            <Link to="/app/tables">
                <button>Back</button>
            </Link>
            Hello
        </div>
    )
}

export default Additem;