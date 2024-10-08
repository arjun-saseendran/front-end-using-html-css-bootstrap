import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ViewProduct() {
  const { urlId } = useParams();

  const title = useSelector((state) => state.cart.productDetails.title);
  const description = useSelector(
    (state) => state.cart.productDetails.description
  );
  const image = useSelector((state) => state.cart.productDetails.image);
  const price = useSelector((state) => state.cart.productDetails.price);

  return (
    <Container>
      <h1 className="text-center text-white m-5">Product Details</h1>
      <Row className="flex justify-content-center align-items-center mt-5">
        <Card className="h-50 w-50 m-5 ">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>${price}</Card.Text>
            <Button variant="secondary">Buy now</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default ViewProduct;
