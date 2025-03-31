import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../footer/footer';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Checkout = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
 const nav = useNavigate()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(error => console.log(error.message));
  }, [id]);

  if (!product) return <div className="loaderr">
    <div className="loader"></div>
  </div>;



  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={8}>
            <div className="checkout-details">
              <h3 className='mb-4'>{product.title}</h3>
              <div className="product-summary mb-3">
                <img src={product.image} alt={product.title} className="img-fluid" style={{ maxWidth: '200px' }} />
                <div className="details mt-4">
                  <p>{product.description}</p>
                  <p className="fw-bold text-danger" style={{ fontSize: '1.7rem' }}>Price: ${product.price}</p>
                </div>
              </div>

              <h4>Billing Details</h4>
              <Form
                action="javascript:void(0)" >
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group controlId="formAddress" className="mb-3">
                  <Form.Label>Shipping Address</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your shipping address" required />
                </Form.Group>

                <Button
                  type="submit"
                  style={{

                    backgroundColor: "#27296d",
                    border: "none"

                  }}

                  onClick={() => {

                    setTimeout(() => {
                      alert('Order placed successfully!');
                      nav('/products');
                    }, 1000);

                  }}

                >Proceed to Payment</Button>
              </Form>
            </div>
          </Col>

          <Col md={4}>
            <div className="order-summary">
              <h3>Order Summary</h3>
              <p>Product: {product.title}</p>
              <p
                className="fw-bold text-danger" style={{ fontSize: '1.7rem' }}
              >Price: ${product.price}</p>
              <Button
                style={{

                  backgroundColor: "#27296d",
                  border: "none"

                }}
                onClick={() => {

                  setTimeout(() => {
                    alert('Order placed successfully!');
                    nav('/products');
                  }, 1000);

                }}
                className="w-100">Place Order</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
