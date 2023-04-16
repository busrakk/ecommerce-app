import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "../../../assets/css/adminDashboard.css";
import { Divider } from "@mui/material";
import { getUser } from "../../../features/userSlice";
import { getUserAsync } from "../../../redux/services";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(getUserAsync());
  }, [dispatch]);

  console.log(user);

  return (
    <>
        <>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Card style={{ padding: 28 }}>
                <Typography variant="h5" gutterBottom>
                  {user.name}
                </Typography>
                <Divider />
                <List disablePadding>
                  <ListItem sx={{ py: 1, px: 0 }}>
                    <Typography variant="h6">
                      <AccountBoxIcon style={{ marginRight: 16 }} />
                      <span>{user.name}</span>
                    </Typography>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ py: 1, px: 0 }}>
                    <Typography variant="h6">
                      <EmailIcon style={{ marginRight: 16 }} />
                      <span>{user.email}</span>
                    </Typography>
                  </ListItem>
                </List>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Stack spacing={2}>
              <Card style={{ padding: 28 }}>
                <Typography variant="h5" gutterBottom>
                  Hakkımda
                </Typography>
                <Divider />
                <List disablePadding>
                  <ListItem sx={{ py: 1, px: 0 }}>
                    <Typography variant="h6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos blanditiis tenetur unde suscipit, quam beatae rerum
                      inventore consectetur, neque doloribus, cupiditate numquam
                      dignissimos laborum fugiat deleniti? Eum quasi quidem
                      quibusdam.
                    </Typography>
                  </ListItem>
                  <Divider />
                </List>
              </Card>
            </Stack>
          </Grid>
        </>
    </>
  );
};

export default Profile;
