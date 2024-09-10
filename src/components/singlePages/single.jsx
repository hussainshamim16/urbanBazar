import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../footer/footer';

const Single = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(error => console.log(error.message));
  }, [id]);

  if (!product) return <div className="loaderr">
  <div class="loader"></div>
</div>

  return (<>

    <div className="product-detail cardDetails mx-4 p-4">
      <img src={product.image} alt={product.title} />
      <div className="context">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default Single;
