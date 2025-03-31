import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import Footer from '../footer/footer';
import { useNavigate,Link } from 'react-router-dom';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const openSingle = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error));
  }, []);

    if (products.length === 0) return <div className="loaderr">
    <div class="loader"></div>
  </div>

  // const openSingle = (id) => {
  //   navigate(`/product/${id}`);
  // };



  return (
    <>
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={2} className="px-3 py-4"
            style={{ backgroundColor: "#5e63b6" }}>
            <h5 className="text-white">Categories</h5>
            <ul className="list-unstyled text-white">
              <li>
                <Link
                  to="#" className="text-white text-decoration-none"

                >Artisan Oils
                </Link>
              </li>
              <li>
              <Link
                  to="#" className="text-white text-decoration-none"

                > Extracts & Flavours
                </Link>
               </li>
              <li>
              <Link
                  to="#" className="text-white text-decoration-none"

                >French Truffles
                </Link>
                </li>
              <li>
              <Link
                  to="#" className="text-white text-decoration-none"

                > Gourmet Condiments
                </Link>
                </li>
            </ul>
          </Col>

          {/* Product Grid */}
          <Col md={10} className="px-4 py-4">
            <Row className="g-4">
              {products.map((product) => (
                <Col md={4} key={product.id} >
                  <Card className="border-0 shadow-sm"
                    style={{

                      height: "auto",
                      minHeight: "70vh",

                    }}

                  >
                    <div className="position-relative">
                      <Card.Img variant="top" src={product.image} className="p-3" style={{ height: "300px", objectFit: "contain" }} />
                    </div>
                    <Card.Body>
                      <Card.Title className="fs-6">{product.title}</Card.Title>
                      <Card.Text className="fw-bold text-danger" style={{ fontSize: '1.2rem' }}>${product.price}</Card.Text>
                      <Button
                        variant="primary"
                        className="w-100 rounded-pill"
                        style={{

                          backgroundColor: "#27296d",
                          border: "none"

                        }}
                        onClick={() => openSingle(product.id)}
                      >Add To Card</Button>

                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductGrid;
