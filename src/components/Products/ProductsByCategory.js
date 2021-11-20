import React,{useState,useEffect} from "react";
import { Card, Grid, Container } from "@mui/material";
import Productitem from "./Products";
import { useLocation } from "react-router-dom";
import CategoriesComponent from "../Categories/Categories";
import axios from "axios"

const ProductsByCategoryComponent = (props) => {

  const [products , setProducts] = useState([])

  const [loading,setLoading] = useState(false)

  console.log("gooff",props)
   const location = useLocation()
  const { classes,match,history } = props;
   
 
  console.log("dataererer1 ",  match.params.catogories);

  console.log("dataererer ", location?.state);

  const category=match.params.catogories

  const getProducts= async()=>{
   setLoading(true)
    setProducts([]);
    const { data } = await axios.get( `https://fakestoreapi.com/products/category/${category}`);
    setProducts(data);
    setLoading(false)
  }


  useEffect(()=>{
    getProducts()
  },[match.params.catogories])


  return ( 
    <div>
      <CategoriesComponent />
      <Container>
        { loading ? <div>Loading Products..</div>  : <Grid sx={{ flexGrow: 1 }} container>
          { 
            products.map((product) => {
              return <Grid item lg={3} md={4} sm={6} xs={12} style={{display:'flex', justifyContent:'center', padding:'8px 8px'}}>
                <Productitem product={product} classes={classes} />
                </Grid>;
            })}
        </Grid>}
      </Container>
    </div>
  );
};

export default ProductsByCategoryComponent;
