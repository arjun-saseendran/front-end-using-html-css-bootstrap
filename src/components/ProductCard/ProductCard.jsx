import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Col from "react-bootstrap/Col";

function ProductCard() {
    const [products, setProducts] = useState([])
    useEffect(() => {
axios.get("https://fakestoreapi.com/products").then(resoponse => setProducts(resoponse.data)).catch(error => console.log(error)
)
    }, [])

  return (
    <>
      {products.map((product) => (
        <Col xm={12} sm={6} md={4} xl={3}>
          <Card className="mt-5">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default ProductCard;
