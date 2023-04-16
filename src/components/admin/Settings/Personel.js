import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";

const type = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'User',
    label: 'User',
  },
];

const Personel = () => {
  return (
    <>
      <Card style={{ padding: 36, margin: 20, width: 100 + "%" }}>
        <Typography variant="h5" gutterBottom>
          Kişisel Bilgiler
        </Typography>
        <Divider />
        <Grid item xs={12} style={{ paddingTop: 40, width:100+"%" }}>
          <Stack spacing={2} direction="row">
            <FormControl sx={{ height: 40, width:50+"%" }}
              variant="outlined">
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue="admin"
                label="Name"
              />
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12} style={{ marginTop:40, width:100+"%" }}>
          <Stack spacing={2} direction="row">
            <FormControl sx={{ height: 40, width:50+"%" }}
              variant="outlined">
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue="admin@gmail.com"
                label="Email"
              />
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12} style={{ marginTop:40, width:100+"%" }}>
          <Stack spacing={2} direction="row">
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { width: '57ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Kullanıcı Türü"
          defaultValue="Admin"
        >
          {type.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        </Box>
          </Stack>
        </Grid>
      </Card>
    </>
  );
};

export default Personel;
