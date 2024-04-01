"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomizedTables = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/user", { method: "GET" });
      const responseData = await response.json();
      if (response.status == 200) {
        setData(responseData);
      } else {
        setData(responseData.msg);
      }
    }
    getData();
  }, []);

  console.log(Data);
  return (
    <TableContainer component={Paper}>
      <center>
        <h1>Feedback Messages</h1>
      </center>
      {Data.length > 0 ? (
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Messages</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((item, index) => (
              <StyledTableRow key={index + 1}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="left">{item.Name}</StyledTableCell>
                <StyledTableCell align="left">{item.Date}</StyledTableCell>
                <StyledTableCell align="left">
                  <a
                    href={`mailto:${item.Email}?subject= Thank you for contacting me`}
                  >
                    {item.Email}
                  </a>
                </StyledTableCell>
                <StyledTableCell align="left">{item.Message}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <center>
          <p>No feedback Messages yet!</p>
        </center>
      )}
    </TableContainer>
  );
};

export default CustomizedTables;
