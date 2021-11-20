import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Card, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Star } from "@mui/icons-material";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const useStyles = makeStyles({
  Card: {
    width: "100%",
    height: 350,
    // background: "rgba(0,0,0,0.5)",
    display: "inline-block",
    boxShadow: "1px 1px 10px white",
    borderRadius: "5px",
    margin: "1%",
  },
  img: {
    height: 275,
    width: "calc(100% - 2px)",
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: 10,
    marginBottom: 20,
    padding: 0,
    overflow:'hidden',
    "&:hover": {
      cursor: "pointer"
      
    }
  },
  imgContainer: {},

  content: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&:hover": {
      cursor: "pointer"
      
    }
  },
});

const Products = ({ product }) => {
  console.log("ProductsByCategory :: in product", product);
  const classes = useStyles();
  const history = useHistory();
  const [productInfo, setProductInfo] = useState([]);

  const getSingleProduct = async (item) => {
    const { data } = await axios.get(
      `https://fakestoreapi.com//products/${item}`
    );
    setProductInfo(data);
    console.log("profuct info", data);
    history.push({
      pathname: `/${data.category}/product/${data.id}`,
      state: data,
    });
  };

  const handleLink = (id) => {
    console.log("clicked", id);
    getSingleProduct(id);
  };
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
  };

  const events = {
    // onDragged: function(event) {...},
    // onChanged: function(event) {...}
  };

  return (
    <div className={classes.Card}>
      <div className="item">
        <OwlCarousel className="owl-theme" items={1} loop margin={10} nav>
          <div className={classes.imgContainer}>
            <div className={classes.img}  onClick={()=> handleLink(product.id)}>
              <div
                style={{
                  width: "inherit",
                  height: "100%",
                  backgroundImage: `url(${
                    product.image ||
                    "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg"
                  })`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </OwlCarousel>
      </div>

      <div className={classes.content} style={{width:'calc(100% - 0px)'}}  onClick={()=> handleLink(product.id)}>
        <div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            width:'calc(100% - 80px)',
            padding:'5px'
          }}
        >
          <p style={{ margin: 0, padding: 0, fontWeight: "bold" }}>
            {product.title}
          </p>{" "}
        </div>
        <div style={{ width: 80 }}>
          <p
            style={{
              margin: 0,
              padding: 0,
              textAlign: "right",
              textDecoration: "underline",
              padding:'5px'
            }}
          >
            ₹ {product.price}
          </p>
        </div>
      </div>

      <div className={classes.content}>
        <div
          style={{
            width:'calc(100% - 80px)',
            padding:'5px',
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <p style={{ margin: 0, padding: 0, color: "grey" }}>
            {product.category}
          </p>{" "}
        </div>
        <p
          style={{ margin: 0, padding: 0, textAlign: "right", color: "grey" }}
          className={classes.content}
        >
          <Star /> {product.rating.rate}({product.rating.count})
        </p>
      </div>
    </div>
  );
};

export default Products;
