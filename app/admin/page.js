"use server";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CustomizedTables = async () => {
  const data = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/user`, {
      cache: "no-store",
    });
    const responseData = await response.json();
    if (response.status == 200) {
      return responseData;
    } else {
      return responseData.msg;
    }
  };
  const Data = await data();
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
              <TableCell>S.No</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Messages</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((item, index) => (
              <TableRow key={index + 1}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{item.Name}</TableCell>
                <TableCell align="left">{item.Date}</TableCell>
                <TableCell align="left">
                  <a
                    href={`mailto:${item.Email}?subject= Thank you for contacting me`}
                  >
                    {item.Email}
                  </a>
                </TableCell>
                <TableCell align="left">{item.Message}</TableCell>
              </TableRow>
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
