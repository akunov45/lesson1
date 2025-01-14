import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import Slider from "../../slider/Slider.jsx";

const Product = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})

  const fetchProductById = async (id) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const data = await response.json();
    console.log(data);
    setProduct(data)
  }

  useEffect(() => {
    fetchProductById(id)
  }, [id])

  if(Object.keys(product).length === 0) {
    return <h3>Loading .... </h3>
  }

  return (
      <>
        <div>
          {product?.images?.map(imgUrl => {
            return <img width={180} src={imgUrl} key={imgUrl} alt=""/>
          })}

        </div>
        <div className={"slider"}>
          <Slider images={product.images} />
        </div>
      </>

  );
};

export default Product;