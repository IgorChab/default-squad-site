import React from 'react'
import { withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Head from 'next/head'

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

function createData(name: string, calories: number, fat: number, league: string) {
  return { name, calories, fat, league};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 'dfiuhh'),
  createData('Ice cream sandwich', 237, 9.0, 'sdvknj'),
  createData('Eclair', 262, 16.0, 'sdkvb'),
  createData('Cupcake', 305, 3.7, 'dfbdfb'),
  createData('Gingerbread', 356, 16.0, 'dfbdfn'),
  createData('Eclair', 262, 16.0, 'sdklhls'),
  createData('Cupcake', 305, 3.7, 'sdvjsdl'),
  createData('Gingerbread', 356, 16.0, 'alskjioshf'),
  createData('Eclair', 262, 16.0, 'sdklvjsdl'),
  createData('Cupcake', 305, 3.7, 'dslkvj'),
  createData('Gingerbread', 356, 16.0, 'sdihvi'),
];

const useStyles = makeStyles({
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
    <>
      <Head>
            <title>League Top</title>
      </Head>
      <TableContainer className={`${classes.container} scrollbar` }>
        <Table aria-label="customized table" stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>???</StyledTableCell>
              <StyledTableCell align="right">Nickname</StyledTableCell>
              <StyledTableCell align="right">Dubbles</StyledTableCell>
              <StyledTableCell align="right">League</StyledTableCell>
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
                <StyledTableCell align="right">{row.league}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default function topRating() {
  return (
    <div className='flex w-full h-full'>
        <div className='flex flex-col px-1 pb-2 w-full h-full'>
             <CustomizedTables/>
        </div>
    </div>
  )
}

