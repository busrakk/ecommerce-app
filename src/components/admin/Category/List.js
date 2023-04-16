import * as React from "react";
import { useState } from "react";
import {
  categoryListApi,
  categoryDeleteApi,
} from "../../../service/serviceApi";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Divider, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import useDelayCallback from "../../helpers/useDelayCallback";

export default function AdminProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredRows, setFilteredRows] = useState([]);

  useDelayCallback(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    categoryListApi().then((res) => {
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

  const dataRows = filteredRows.length > 0 ? filteredRows : rows;

  const handleDelete = (e, id) => {
    e.preventDefault();
    swal({
      title: "Emin misin?",
      text: "Bunu geri alamayacaksın",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        categoryDeleteApi(id).then((res) => {
          if (res.data.success && res.data.status === "success") {
            swal({
              title: "Başarılı",
              text: res.data.message,
              icon: "success",
              timer: 2000,
              buttons: false,
            });
            deleteData(id);
          } else {
            swal({
              title: "Hata",
              text: res.data.message,
              icon: "error",
              timer: 2000,
              buttons: false,
            });
          }
        });
      }
    });
  };

  const deleteData = (removeId) => {
    const newCategory = dataRows.filter((data) => data.id !== removeId);
    setRows(newCategory);
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
        <Autocomplete
          id="product-select"
          sx={{ width: 300 }}
          options={rows.map((row) => row.name)}
          renderInput={(params) => (
            <TextField {...params} label="Ürün Filtrele" margin="dense" />
          )}
          onChange={(event, value) => {
            if (value) {
              const filteredRows = rows.filter((row) => row.name === value);
              setFilteredRows(filteredRows);
            } else {
              setFilteredRows([]);
            }
            setPage(0);
          }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button variant="contained" endIcon={<AddCircleIcon />}>
          Kategori Ekle
        </Button>
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
                Öne Çıkar
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Status
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading &&
              dataRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">
                        <Stack direction="row" spacing={1}>
                          {row.featured ? (
                            <Chip
                              label="Evet"
                              color="primary"
                              variant="outlined"
                            />
                          ) : (
                            <Chip
                              label="Hayır"
                              color="secondary"
                              variant="outlined"
                            />
                          )}
                        </Stack>
                      </TableCell>
                      <TableCell align="left">
                        {row.status ? (
                          <Chip
                            label="Aktif"
                            color="success"
                            variant="outlined"
                          />
                        ) : (
                          <Chip
                            label="Pasif"
                            color="error"
                            variant="outlined"
                          />
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <Stack spacing={2} direction="row">
                          <EditIcon
                            style={{
                              fonstSize: "20px",
                              color: "#3f50b5",
                              cursor: "pointer",
                            }}
                            className="cursor-pointer"
                            // onClick={() => editUser(row.id)}
                          />
                          <DeleteIcon
                            style={{
                              fonstSize: "20px",
                              color: "#ba000d",
                              cursor: "pointer",
                            }}
                            className="cursor-pointer"
                            onClick={(e) => handleDelete(e, row.id)}
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
