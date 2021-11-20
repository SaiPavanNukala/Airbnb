import React,{useState} from "react";
import { Card, Grid, Container } from "@mui/material";
import Productitem from "./Products";
import { useLocation } from "react-router-dom";
import CategoriesComponent from "../Categories/Categories";

const ProductsByCategoryComponent = (props) => {
  console.log("gooff",props)
   const location = useLocation()
  const { classes,match,history } = props;
 


  console.log("dataererer ", location?.state);
  //   const history = useHistory();
  // useEffect(() => {
  //   return () => {
  //     // && history.location.pathname === "any specific path")
  //     if (history.action === "POP") {
  //       history.replace(history.location.pathname, /* the new state */);
  //     }
  //   };
  // }, [history])


  return ( 
    <div>
      <CategoriesComponent />
      <Container>
        <Grid sx={{ flexGrow: 1 }} container>
          { 
            location?.state.map((product) => {
              return <Grid item lg={3} md={4} sm={6} xs={12} style={{display:'flex', justifyContent:'center', padding:'8px 8px'}}>
                <Productitem product={product} classes={classes} />
                </Grid>;
            })}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductsByCategoryComponent;
