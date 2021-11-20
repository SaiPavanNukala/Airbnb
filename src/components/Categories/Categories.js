import React, { useState, useEffect } from "react";
import { Button, Grid, Container } from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Productitem from "../Products/Products";


const CategoriesComponent = () => {
  const history = useHistory();
  const [Categories, setCategories] = useState([]);
  const [ProductsByCategory, setProductsByCategory] = useState([]);

  const getCategories = async () => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    setCategories(data);
  };

  const getProductsByCategories = async (category) => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setProductsByCategory(data);
    history.push({ pathname: `/category/${category}`, state: data });
  };

  useEffect(() => getCategories(), []);

  const handleCategory = (category) => {
    getProductsByCategories(category);
  };


  return (
    <Container>
    <div
      style={{
        display: "inlineFlex",
        position: "sticky",
        top: 0.5,
        heigth: 40,
        left: "0",
        top: "0",
        zIndex: 99,
        backgroundColor: '#FFF',
        marginBottom: 10,
      }}
    >
      <Grid xs={12} Container spacing={2} >
        {Categories &&
          Categories.map((category, index) => {
            return (
              <div
                style={{
                  display:'inline-flex',
                  marginLeft: "0px",
                }}
              >
                <Button
                  style={{ color: "#484848", padding: "10px" }}
                  onClick={() => handleCategory(category)}
                >
                  {category}
                </Button>
              </div>
            );
          })}
      </Grid>
      <br />
   
      {
      ProductsByCategory.map((product) => {
              return <Productitem product={product}  />;
            })
      }
      
    </div>      
      </Container>
  );
};

export default CategoriesComponent;
