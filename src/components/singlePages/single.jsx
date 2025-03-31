import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';

const Single = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(error => console.log(error.message));
  }, [id]);

  if (!product) return <div className="loaderr">
    <div class="loader"></div>
  </div>

  const openSingle = (id) => {
    navigate(`/checkout/${id}`);
  };

  return (<>

    <div className="product-detail cardDetails mx-4 p-4">
      <img src={product.image} alt={product.title} />
      <div className="context">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {/* <Button variant="primary me-2">Add To Cart</Button> */}
        <Button
          className="w-100 rounded-pill"
          style={{

            backgroundColor: "#27296d",
            border: "none"

          }}
          onClick={() => openSingle(product.id)}
        >Proceed to Checkout</Button>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default Single;
