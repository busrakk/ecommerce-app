import React from "react";
import Box from "@mui/material/Box";
import List from "./List"

const index = () => {
  return (
    <>
      <Box height={10} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <List />
      </Box>
    </>
  );
};

export default index;
