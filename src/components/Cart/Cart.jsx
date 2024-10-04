import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

function Cart() {
    const cartProducts = useSelector((state)=> state.cart.cartProducts)
    const cartProductCount = useSelector((state) => state.cart.cartProductCount);

    console.log(cartProducts);
    
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cartProducts.map((product) => (
          <tr key={product.id}>
            <td>{cartProductCount}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>
              <img src={product.image} height='50px'/>
            </td>
            <td>${product.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Cart;
