import {React, useEffect, useState } from "react";
import axios from 'axios';
import Header from "../../components/Header";

import "./HomePage.css";
import ProductsGrid from "./ProductsGrid";

function HomePage({cart}) {
  // fetch('http://localhost:3000/api/products')
  // .then((response)=>{
  //   response.json().then((data)=>{
  //     console.log(data)
  //   })
  // })

  // fetch('http://localhost:3000/api/products')
  //   .then((response)=>{
  //       return response.json();
  //   }).then((data)=>{
  //       console.log(data)
  //   });

  const[products, setProducts] = useState([]);


  useEffect(()=>{

    const getHomeData = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data)
    }

    getHomeData();
  },[])

 

  return (
    <>
      <title>ECommerce Project</title>
      <Header cart={cart}/>
      <div className="home-page">
        <ProductsGrid products={products}/>
      </div>
    </>
  );
}

export default HomePage;
