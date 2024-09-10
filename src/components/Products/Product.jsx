import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';

const Product = () => {
  const [productArray, setProductArray] = useState([]);
  const navigate = useNavigate();
  const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus facere necessitatibus nesciunt sint maxime, provident assumenda pariatur quae earum! Corrupti explicabo soluta deserunt incidunt fuga hic iure beatae blanditiis molestiae.';

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProductArray(res.data))
      .catch(error => console.log(error.message));
  }, []);

  if (productArray.length === 0) return <div className="loaderr">
    <div class="loader"></div>
  </div>
  const openSingle = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>


      <div className='shortProducts mx-4'>
        {productArray.map((value) => (
          <Card className='ShortCarder my-3' key={value.id}>
            <Card.Img variant="top" src={value.image} className='val' />
            <Card.Body>
              <Card.Title>{value.title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <button onClick={() => openSingle(value.id)}  style={

{

    backgroundColor : "#27296d",
    color: "white",
    padding: "10px 40px",
    borderRadius : "30px",
    border: "none"


}

    }>Details</button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Footer/>
    </>
  );
};

export default Product;
