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
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import InfoIcon from "@mui/icons-material/Info";
import useDelayCallback from "../../helpers/useDelayCallback";
import Show from "./Show";
import Loader from "../../Loader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function List() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredRows, setFilteredRows] = useState([]);
  const [formid, setFormid] = useState("");

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const dataRows = filteredRows.length > 0 ? filteredRows : rows;

  const showData = (
    id,
    categories,
    brand,
    user,
    name,
    price,
    type,
    description,
    image
  ) => {
    const data = {
      id: id,
      categories: categories,
      brand: brand,
      user: user,
      name: name,
      price: price,
      type: type,
      description: description,
      image: image,
    };
    setFormid(data);
    handleOpen();
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Show closeEvent={handleClose} data={formid} />
          </Box>
        </Modal>
      </div>
      {isLoading && <Loader />}
      {rows.length > 0 && (
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
            {/* filter */}
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
                  dataRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          key={row.id}
                          hover
                          role="checkbox"
                          tabIndex={-1}
                        >
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="left">
                            {row?.["user"]?.name}
                          </TableCell>
                          <TableCell align="left">
                            {row?.["categories"]?.name}
                          </TableCell>
                          <TableCell align="left">
                            {row?.["brand"]?.name}
                          </TableCell>
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
                                onClick={() => {
                                  showData(
                                    row.id,
                                    row.categories,
                                    row.brand,
                                    row.user,
                                    row.name,
                                    row.price,
                                    row.type,
                                    row.description,
                                    row.image
                                  );
                                }}
                                // onClick={handleOpen}
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
      )}
    </>
  );
}
