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

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      length: 8,
      count: 5,
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
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
          <TextField
            id="length"
            label="length"
            value={this.state.length}
            onChange={this.handleChange('length')}
            margin="normal"
          />
        <br />
          <TextField
            id="count"
            label="count"
            value={this.state.count}
            onChange={this.handleChange('count')}
            margin="normal"
          />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Promo Codes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                VoucherCodes.generate({
                  charset: "BCDFGHJKMPQRTVWXY234789",
                  length: this.state.length,
                  count: this.state.count
                }).map((code) =>
                  <TableRow key={code}>
                    <TableCell component="th" scope="row">
                      {code}
                    </TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}


export default withTheme()(App);
