import React from "react";
import VoucherCodes from 'voucher-code-generator';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withTheme } from '@material-ui/core/styles'

const codes = VoucherCodes.generate({
  charset: "BCDFGHJKMPQRTVWXY234789",
  length: 8,
  count: 5
});

const listItems = codes.map((code) =>
  <TableRow key={code}>
    <TableCell component="th" scope="row">
      {code}
    </TableCell>
  </TableRow>
);


function App(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Promo Code Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Promo Codes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listItems}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}


export default withTheme()(App);
