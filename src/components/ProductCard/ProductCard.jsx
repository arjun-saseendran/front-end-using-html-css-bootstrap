import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Col from "react-bootstrap/Col";
import { add } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { viewProduct } from "../../features/cart/cartSlice";

function ProductCard() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {products.map((product) => (
        <Col xm={12} sm={6} md={4} xl={3} key={product.id}>
          <Card className="mt-5" style={{ background: "#EEEEEE" }}>
            <Card.Img
              variant="top"
              src={product.image}
              style={{ height: "200px", objectFit: "contain", padding: "10px" }}
            />
            <Card.Body>
              <Card.Title style={{ maxHeight: "20px", overflow: "hidden" }}>
                {product.title}
              </Card.Title>
              <Card.Text style={{ maxHeight: "78px", overflow: "hidden" }}>
                {product.description}
              </Card.Text>

              <Link to={`/view-product/${product.id}`}>
                <Button
                  onClick={() => dispatch(viewProduct(product))}
                  className="m-2"
                  variant="dark"
                >
                  View Product
                </Button>
              </Link>

              <Button variant="dark" onClick={() => dispatch(add(product))}>
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default ProductCard;
