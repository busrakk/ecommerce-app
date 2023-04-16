import * as React from "react";
import { Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const ShowProduct = ({ closeEvent, data }) => {
  return (
    <>
      <Box sm={{ m: 2 }} />
      <Typography variant="h5" align="center">
        {data.name}
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: 0 }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={10} />
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <CardMedia
            component="img"
            className="w-30 h-30"
            image={data.image}
            alt={data.name}
          />
        </Grid>
        <Grid item xs={7}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <span className="pricetitle">Kategori: </span>
              {data?.["categories"]?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="pricetitle">Marka: </span>
              {data?.["brand"]?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="pricetitle">{data.type ? 'Satıcı:' : "Alıcı"} </span>
              {data?.["user"]?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="pricetitle">Fiyat: </span>
              {data.price} TL
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
};

export default ShowProduct;
