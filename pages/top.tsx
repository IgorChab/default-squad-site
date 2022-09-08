import React from 'react'
import { withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles(() =>
  createStyles({
    head: {
      backgroundColor: 'blueviolet',
      color: '#fff',
    },
    body: {
      fontSize: 14,
      color: '#fff',
      width: '100px'
    },
  }),
)(TableCell);

const StyledTableRow = withStyles(() =>
  createStyles({
    root: {
      backgroundColor: '#150E14',
      '&:nth-of-type(odd)': {
        backgroundColor: 'rgb(41 37 36)',
      },
    },
  }),
)(TableRow);

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  container: {
    overflowY: 'auto',
    height: '0px',
    flexGrow: 1,
    paddingRight: '5px'
  }
});

function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer className={`${classes.container} scrollbar` }>
      <Table className={classes.table} aria-label="customized table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell align="right">Nickname</StyledTableCell>
            <StyledTableCell align="right">Bubbles</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function top() {
  return (
    <div className='flex w-full h-full'>
        <div className='flex flex-col px-1 pb-2 w-full h-full'>
             <CustomizedTables/>
        </div>
    </div>
  )
}

