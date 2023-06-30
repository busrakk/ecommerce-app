import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "../../assets/css/adminDashboard.css";
import AccordionDashboard from "../../layouts/admin/AccordionDashboard";
import BarChart from "../../charts/BarChart";
import CountUp from "react-countup";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Category";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { dashboardDataApi } from "../../service/serviceApi";
import useDelayCallback from "../helpers/useDelayCallback";
//import Loading from "../Loader/Loading";

const Dashboard = () => {
  const initialData = {
    countCategory: null,
    countBrand: null,
    countProduct: null,
    countUser: null,
  };
  //const [isLoading, setIsLoading] = useState(true);
  const [cardData, setCardData] = useState(initialData);

  useDelayCallback(() => {
    getDashboardData();
  }, []);

  const getDashboardData = () => {
    dashboardDataApi().then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          //setIsLoading(false);
          setCardData(res.data.cardData);
        }
      }
    });
  };

  return (
    <>
      <Box height={70} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack spacing={2} direction="row">
              <Card
                sx={{ minWidth: 36.4 + "%", height: 150 }}
                className="gradient"
              >
                <CardContent>
                  <div className="iconstyle">
                    <CategoryIcon />
                  </div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#ffffff" }}
                  >
                    ${" "}
                    <CountUp
                      delay={0.2}
                      end={cardData.countCategory}
                      duration={0.3}
                    />
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    sx={{ color: "#ccd1d1" }}
                  >
                    Toplam Kategori
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{ minWidth: 36.4 + "%", height: 150 }}
                className="gradientlight"
              >
                <CardContent>
                  <div className="iconstyle">
                    <TurnedInIcon />
                  </div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#ffffff" }}
                  >
                    ${" "}
                    <CountUp
                      delay={0.2}
                      end={cardData.countBrand}
                      duration={0.3}
                    />
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    sx={{ color: "#ccd1d1" }}
                  >
                    Toplam Marka
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{ minWidth: 36.4 + "%", height: 150 }}
                className="gradientsecondary"
              >
                <CardContent>
                  <div className="iconstyle">
                    <PeopleIcon />
                  </div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#ffffff" }}
                  >
                    ${" "}
                    <CountUp
                      delay={0.2}
                      end={cardData.countUser}
                      duration={0.3}
                    />
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    sx={{ color: "#ccd1d1" }}
                  >
                    Toplam Kullanıcı
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{ minWidth: 36.4 + "%", height: 150 }}
                className="gradientend"
              >
                <CardContent>
                  <div className="iconstyle">
                    <ShoppingCartIcon />
                  </div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#ffffff" }}
                  >
                    ${" "}
                    <CountUp
                      delay={0.2}
                      end={cardData.countProduct}
                      duration={0.3}
                    />
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    sx={{ color: "#ccd1d1" }}
                  >
                    Toplam Ürün
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
        <Box height={20} />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ height: 60 + "vh" }}>
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ height: 60 + "vh" }}>
              <CardContent>
                <div className="paddingall">
                  <span className="pricetitle">Popular Ürünler</span>
                </div>
                <AccordionDashboard />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
