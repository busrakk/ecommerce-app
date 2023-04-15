import React from 'react'
import Box from "@mui/material/Box";
import AdminProductList from './AdminProductList';

const Product = () => {
  return (
    <>
      <Box height={30} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AdminProductList />
      </Box>
    </>
  )
}

export default Product