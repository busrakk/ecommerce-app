import * as React from "react";
import { useState } from "react";
import { productListApi } from "../../../service/serviceApi";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import InfoIcon from '@mui/icons-material/Info';
import useDelayCallback from "../../helpers/useDelayCallback";

export default function AdminProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useDelayCallback(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    productListApi().then((res) => {
      if (res.data.success && res.data.status === "success") {
        setIsLoading(false);
        setRows(res.data.data);
      } else {
        setRows([]);
      }
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "20px" }}
      >
        Ürünler Listesi
      </Typography>
      <Divider />
      <Box height={10} />
      <Stack direction="row" spacing={2} className="my-2 mb-2">
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
      </Stack>
      <Box height={10} />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Adı
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Satıcı
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Kategori
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Marka
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Fiyat
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading &&
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row?.["user"]?.name}</TableCell>
                      <TableCell align="left">
                        {row?.["categories"]?.name}
                      </TableCell>
                      <TableCell align="left">{row?.["brand"]?.name}</TableCell>
                      <TableCell align="left">{row.price}</TableCell>
                      <TableCell align="left">
                        <Stack spacing={2} direction="row">
                          <InfoIcon
                            style={{
                              fonstSize: "20px",
                              color: "#0288d1",
                              cursor: "pointer",
                            }}
                            className="cursor-pointer"
                            // onClick={() => editUser(row.id)}
                          />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
