import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import AllProducts from "./Products/AllProducts";
import CategoriesComponent from "../components/Categories/Categories";

const AllNature = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    setProducts(data);
  };

  useEffect(() => getProducts(), []);

  console.log("in Home",data)

  return (
    <Container>     
        <CategoriesComponent />
        <Box>
          <Grid sx={{ flexGrow: 1 }}>
            <AllProducts allProducts={products} />
          </Grid>
        </Box>     
    </Container>
  );
};

export default AllNature;
