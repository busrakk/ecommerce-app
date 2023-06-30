import React, { useState } from "react";
import swal from "sweetalert";
import {
  Box,
  Card,
  CardContent,
  Button,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import useDelayCallback from "../../helpers/useDelayCallback";
import {
  categoryFindApi,
  categoryUpdateApi,
} from "../../../service/serviceApi";
import Loading from "../../Loader/Loading";

const ImagePreview = styled("img")({
  maxWidth: "50%",
  maxHeight: "50%",
});

const Edit = (props) => {
  const initialData = {
    name: "",
    status: true,
    featured: false,
    oldImage: null,
    error_list: [],
  };

  const [categoryInput, setCategoryInput] = useState(initialData);
  const [status, setStatus] = useState(true);
  const [featured, setFeatured] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error_list, setErrorList] = useState([]);

  useDelayCallback(() => {
    getCurrentData(props.categoryId);
  }, [props.categoryId]);

  const getCurrentData = (id) => {
    categoryFindApi(id, []).then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          setCategoryInput(res.data.data);
          setStatus(res.data.data.status === 1 ? true : false);
          setFeatured(res.data.data.featured === 1 ? true : false);
          setIsLoading(false);
        } else {
          swal({
            title: "Error",
            text: res.data.message,
            icon: "error",
            timer: 2000,
            buttons: false,
          });
        }
      } else {
        swal({
          title: "Error",
          text: res.data.message,
          icon: "error",
          timer: 2000,
          buttons: false,
        });
      }
    });
  };

  const handleInput = (e) => {
    e.persist();
    setCategoryInput({ ...categoryInput, [e.target.name]: e.target.value });
  };

  const handleStatus = () => {
    setStatus(!status);
  };
  const handleFeatured = () => {
    setFeatured(!featured);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoryInput({ ...categoryInput, error_list: [] });
    const data = {
      name: categoryInput.name,
      status: status,
      featured: featured,
    };

    categoryUpdateApi(props.categoryId, data).then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          swal({
            title: "Success",
            text: res.data.message,
            icon: "success",
            buttons: false,
            timer: 1500,
          });
          props.onClose("success");
        }
      } else {
        if (res.data.status === "validation-error") {
          setErrorList(res.data.errors);
        } else {
          swal({
            title: "Error",
            text: res.data.message,
            icon: "error",
            timer: 2000,
            buttons: false,
          });
        }
      }
    });

    props.closeEvent();
  };

  const addCategory = () => {};

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <Box sx={{ m: 2 }} />
          <Typography id="modal-modal-title" variant="h5" align="center">
            Kategori Düzenle
          </Typography>
          <IconButton
            style={{ position: "absolute", top: "0", right: "0" }}
            onClick={props.closeEvent}
          >
            <CloseIcon />
          </IconButton>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Kategori Adı"
                variant="outlined"
                size="small"
                sx={{ minWidth: "100%" }}
                name="name"
                onChange={handleInput}
                value={categoryInput.name}
              />
              <span className="text-red-500">{error_list.name}</span>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Resim Seç
                  </Typography>
                  <input
                    accept="image/*"
                    id="image-input"
                    type="file"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="image-input">
                    <Button variant="contained" component="span">
                      Choose File
                    </Button>
                  </label>
                  {selectedImage && (
                    <div>
                      <ImagePreview src={selectedImage} alt="Selected" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Öne Çıkar"
                  onChange={handleFeatured}
                  checked={featured}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Status"
                  onChange={handleStatus}
                  checked={status}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                <Button variant="contained" type="submit" onClick={addCategory}>
                  Güncelle
                </Button>
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ m: 4 }} />
        </form>
      )}
    </>
  );
};

export default Edit;
