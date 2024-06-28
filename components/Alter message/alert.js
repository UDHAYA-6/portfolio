import React, { useState } from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
export default function SimpleSnackbars({ value, msg, status }) {
  const [open, setopen] = useState(value);
  const vertical = "top",
    horizontal = "center";

  const handleClose = () => {
    setopen(false);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert severity={status} variant="filled">
          {msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
